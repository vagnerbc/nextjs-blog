import utilStyles from "../styles/utils.module.css";
export default function Custom404() {
  return (
    <h1
      className={(utilStyles.headingXl, utilStyles.lightText)}
      style={{ textAlign: "center" }}
    >
      404 = Page Not Found
    </h1>
  );
}
