import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { Box } from "./Grid";
import Loading from "./Loading";
import { BLACK } from "../constants/Colors";

const PageContainer = (props) => {
  const [firstLoad, setFirstLoad] = useState(true);

  const verticalPadding = 100;
  const page = useLocation().pathname.replace("/", "");

  const PageContainer = styled(Box)`
    max-width: 1440px;
    background-color: ${BLACK};
    padding: ${verticalPadding}px 5%;
    min-height: calc(100vh - ${verticalPadding * 2}px);
  `;

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
  }, [firstLoad]);

  return (
    <PageContainer currentPath={page} {...props}>
      {firstLoad && <Loading />}
      {props.children}
    </PageContainer>
  );
};

export default PageContainer;
