import { useParams } from "react-router-dom";
import {
  // eslint-disable-next-line no-unused-vars
  ResourcesContextProvider,
  useResources,
} from "../contexts/ResourcesContext";

function Resource() {
  const id = parseInt(useParams().id, 10);
  const { resources } = useResources();
  const resource = resources.find((candidate) => candidate.id === id);

  return <p>hello {resource.url}</p>;
}

export default Resource;
