import { Command } from "commander";
import { version } from "../package.json";

const program = new Command();

program
  .name("opendigger")
  .version(version)
  .description("A CLI for Open Digger");

program
  .option(
    "-r, --repo [repo]",
    "repo path e.g. X-lab2017/open-digger",
    "X-lab2017/open-digger"
  )
  .option("-t, --metric [metric]", "metric type e.g. OpenRank", "OpenRank")
  .option("-m, --month [month]", "month e.g. 2023-01", "2023-01");

program.parse();

const { repo, metric, month } = program.opts();

console.log(`repo.name: ${repo}`);
console.log(`repo.url: https://github.com/${repo}`);
console.log(`${(metric + "").toLowerCase()}: {}`);
