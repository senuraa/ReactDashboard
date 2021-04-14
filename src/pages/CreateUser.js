import React from "react";
import InputTags from "../components/molecules/InputTags";

const getTags = (tags) => {
  console.log(tags);
};

const CreateUser = () => {
  return (
    <div>
      <h1>Create User</h1>
      <InputTags getTags={getTags} />
    </div>
  );
};

export default CreateUser;
