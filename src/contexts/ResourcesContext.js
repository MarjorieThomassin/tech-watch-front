import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const resourcesContext = createContext();

function ResourcesContextProvider({ children }) {
  const [resources, setResources] = useState([]);

  const history = useHistory();

  const addResource = (data) => {
    const existingResource = resources.find(
      (resource) => resource.url === data
    );

    if (existingResource == null) {
      setResources([...resources, { id: resources.length + 1, url: data }]);
    } else {
      history.push(`/resources/${existingResource.id}`);
    }
  };

  return (
    <resourcesContext.Provider
      value={{
        addResource,
        resources,
      }}
    >
      {children}
    </resourcesContext.Provider>
  );
}

ResourcesContextProvider.PropTypes = {
  children: PropTypes.element.isRequired,
};

const useResources = () => useContext(resourcesContext);

export { ResourcesContextProvider, useResources };
