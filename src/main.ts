import "@logseq/libs";
import {
  LSPluginBaseInfo,
  SettingSchemaDesc,
} from "@logseq/libs/dist/LSPlugin";
import runjsRenderer from "./runjs";

const Supports = {};

const settingsSchema: Array<SettingSchemaDesc> = [];

function main(baseInfo: LSPluginBaseInfo) {
  console.log("Run JS plugin loaded")
  const { settings } = baseInfo;

  logseq.Experiments.registerFencedCodeRenderer("runjs", {
    edit: true,
    render: runjsRenderer,
  });
}

// entry
logseq.useSettingsSchema(settingsSchema).ready(main).catch(console.error);
