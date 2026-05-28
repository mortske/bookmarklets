// If you have a Jira issue open, this script will create a branch name based on the issue title and copy it to your clipboard.
javascript: (() => {
  const issueTitle = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.summary.heading"]'
  ).textContent;
  const issueNumber = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
  )?.children[0]?.textContent;
  const issueType = document.querySelector(
    '[data-testid="issue-view-foundation.noneditable-issue-type.button"]'
  )?.getAttribute("aria-label");
  if (!issueNumber || !issueTitle) {
    alert(
      "No issue found. Make sure you are looking at a specific Jira issue."
    );
    return;
  }
  const typeMap = {
    "Feature":"feature",
    "Story":"story",
    "Sub-task":"task",
    "Task":"tech",
    "Bug":"bug",
    "Incident":"bug",
  };
  const branchType = typeMap[issueType] ? `${typeMap[issueType]}/` : "";
  const branchName = `${branchType}${issueNumber}-${issueTitle
    .toLocaleLowerCase()
    .trim()
    .replace(/[åä]/g, "a")
    .replace(/[ö]/g, "o")
    .replace(/[^a-z0-9\-\s]|\s(?=\-)|(?<=\-)\s/g, "")
    .replace(/ /g, "-")}`;
  navigator.clipboard.writeText(branchName).then(() => {
    console.log("Copied to clipboard: ", branchName);
  });
})();


