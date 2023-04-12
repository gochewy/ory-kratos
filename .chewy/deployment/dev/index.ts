import * as chewy from "@gochewy/lib";
import * as docker from "@pulumi/docker";
import ComponentOutput from "../component-output";

type Graph = ReturnType<typeof chewy.project.getDependencyGraph>;
type NodeData = ReturnType<Graph["getNodeData"]>;
type Dependencies = NodeData[];

interface DevOptions {
  dependencies: Dependencies;
}

export default function dev({
  dependencies,
}: DevOptions) {
  const projectConfig = chewy.project.getProjectConfig();
  const componentId = chewy.components.getComponentId();

  const image = new docker.RemoteImage(componentId, {
    name: "oryd/kratos:v0.11.1", // TODO: make this configurable
  });

  let output: ComponentOutput = {
  }

  return output;
}
