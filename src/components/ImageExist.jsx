import React, { useEffect, useState } from "react";

const ImageExist = ({ url }) => {
  const [check, setCheck] = useState(null);

  const checkImageExist = async () => {
    const response = await fetch(url);
    if (response.status === 200) setCheck(true);
    else setCheck(false);
  };

  useEffect(() => {
    checkImageExist();
  }, []);

  return (
    <img
      src={
        check
          ? url
          : "https://images.pexels.com/photos/16763202/pexels-photo-16763202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      className="card-img-top img-fluid"
      alt="image"
    />
  );
};

export default ImageExist;
