import * as React from "react";
import { HeadTitle } from "../../components";
import { inject, observer } from "mobx-react";
import HomeStore from "../../stores/home";
import { GetServerSideProps } from "next";
import style from "./index.scss";
type Props = {
  home?: HomeStore;
  errors?: string;
};

const InitialPropsDetail: React.SFC<Props> = () => {
  return (
    <div className={style.detail}>
      <HeadTitle title="the detail" />
      detail
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return { props: {} };
  } catch (err) {
    console.error(err.message);
    return { props: {} };
  }
};

export default inject("home")(observer(InitialPropsDetail));
