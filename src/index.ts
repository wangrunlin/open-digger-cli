import { Command } from "commander";
import { version } from "../package.json";

const baseURL = "https://oss.x-lab.info/open_digger/github/";
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
  .option("-m, --month [month]", "month e.g. 2023-01");

program.parse();

const { repo, metric, month } = program.opts();
const merticType = metric.toLowerCase();

const output = (repo: string, metric: string, month: string, data: any) => {
  console.log(`repo.name: ${repo}`);
  console.log(`repo.url: https://github.com/${repo}`);

  if (month) console.log(`month: ${month}`);

  console.log(`${metric}: ${data}`);
};

const main = async () => {
  const response = await fetch(`${baseURL}${repo}/${merticType}.json`);

  if (response.status !== 200) {
    // todo: log error message
    return console.log("repo or mertic not vaild");
  }

  const jsonData = await response.json();

  output(
    repo,
    merticType,
    month,
    month ? jsonData[month] : JSON.stringify(jsonData)
  );
};

main();
