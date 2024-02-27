import { useTranslation } from "react-i18next";

const QButton = () => {
  const { t } = useTranslation();
  return <p>{t("LOVE")}</p>;
};
export default QButton;
