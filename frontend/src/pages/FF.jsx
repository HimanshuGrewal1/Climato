import { useEffect, useState } from "react";

const FF = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/fully_cleaned_cc.html") 
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default FF;
