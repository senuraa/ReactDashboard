import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

const InputTagContainer = styled.div`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.quaternary.main};
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
const InputTags = ({ getTags }) => {
  const [tags, setTags] = useState([]);
  const inputField = React.createRef();
  const onTagRemove = (idx) => {
    const newTags = tags;
    newTags.splice(idx, 1);
    setTags([...newTags]);
  };
  const onInputKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
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
    <InputTagContainer onClick={() => inputField.current.focus()}>
      <UlInputTag>
        {tagsItems}
        <LiInput>
          <TextInput
            name={"User Roles"}
            ref={inputField}
            onKeyDown={onInputKeyDown}
            onChange={onInputChange}
          />
        </LiInput>
      </UlInputTag>
    </InputTagContainer>
  );
};
InputTags.propTypes = {
  getTags: PropTypes.func.isRequired,
};

export default withTheme(InputTags);
