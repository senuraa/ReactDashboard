import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { func, string } from "prop-types";
import Typography from "../atoms/Typography";

const InputTagContainer = styled.div`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.quaternary.main};
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.white};
`;
const UlInputTag = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const LiInput = styled.li`
  display: inline-block;
`;
const TextInput = styled.input`
  border: none;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;
const TagButton = styled.button`
  background-color: ${(props) => props.theme.colors.quaternary.main};
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.quaternary.contrastText};
`;
const TagText = styled.span`
  margin-right: 0.5rem;
`;
const InputTags = (props) => {
  const { getTags, label, name } = props;
  const [tags, setTags] = useState([]);
  const inputField = React.createRef();
  const onTagRemove = (idx) => {
    const newTags = tags;
    newTags.splice(idx, 1);
    setTags([...newTags]);
  };
  const onInputKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === " " && value) {
      setTags((tags) => [...tags, value]);
      inputField.current.value = null;
    } else if (e.key === "Backspace" && !value) {
      onTagRemove(tags.length - 1);
    }
  };
  const onInputChange = () => {
    getTags(tags);
  };
  const tagsItems = tags.map((tag, idx) => (
    <LiInput key={idx}>
      <TagButton onClick={() => onTagRemove(idx)}>
        <TagText>{`#${tag}`}</TagText>
        <span>x</span>
      </TagButton>
    </LiInput>
  ));
  return (
    <>
      <Typography variant={"p1"} color={"primary"} fontWeight={400}>
        {label}
      </Typography>
      <InputTagContainer onClick={() => inputField.current.focus()}>
        <UlInputTag>
          {tagsItems}
          <LiInput>
            <TextInput
              name={name}
              ref={inputField}
              onKeyDown={onInputKeyDown}
              onChange={onInputChange}
            />
          </LiInput>
        </UlInputTag>
      </InputTagContainer>
    </>
  );
};
InputTags.propTypes = {
  getTags: func.isRequired,
  label: string,
  name: string,
};

export default withTheme(InputTags);
