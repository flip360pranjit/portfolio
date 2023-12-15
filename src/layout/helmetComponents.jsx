import Head from "./Head";

const helmetComponents = [
  {
    route: "/",
    title: "Pranjit Kakoti  | Web Developer, Programmer, and Creative Artist",
    description:
      "Pranjit Kakoti - Web Developer, Programmer, and Creative Artist",
  },
  {
    route: "/contact",
    title: "Contact | Pranjit Kakoti",
    description: "Contact Pranjit Kakoti for conversations or inquiries.",
  },
  {
    route: "/projects",
    title: "Projects | Pranjit Kakoti",
    description: "Explore Pranjit Kakoti's portfolio of projects and works.",
  },
  {
    route: "/project-planner",
    title: "Project Planner | Pranjit Kakoti",
    description:
      "Fill out a form to discuss projects or collaborations with Pranjit Kakoti.",
  },
  {
    route: "/success",
    title: "Success | Pranjit Kakoti",
    description:
      "Your form submission was successful. Thank you for contacting Pranjit Kakoti!",
  },
  {
    route: "*",
    title: "404 Error | Pranjit Kakoti",
    description: "Oops! There was an error. Please try again later.",
  },
];

const getHeadComponent = (route) => {
  const headComponent = helmetComponents.find((item) => item.route === route);

  if (headComponent) {
    return (
      <Head
        title={headComponent.title}
        description={headComponent.description}
        url={`${import.meta.env.VITE_REACT_APP_CLIENT_URL}${
          headComponent.route
        }`}
      />
    );
  }

  return (
    <Head
      title="Page Not Found"
      description="Oops! The page you're looking for could not be found."
      url={import.meta.env.VITE_REACT_APP_CLIENT_URL}
    />
  );
};

export default getHeadComponent;
