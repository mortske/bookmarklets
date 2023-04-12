// If you have a Jira issue open, this script will create a markdown link to the issue and copy it to your clipboard.
javascript: (() => {
  const issue = document.querySelector(
    '[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
  );
  console.log(issue.href);
  if (!issue) {
    alert(
      "No issue found. Make sure you are looking at a specific Jira issue."
    );
    return;
  }
  const issueNumber = issue.href.match(/\/browse\/(.*)/)[1];
  const link = `[${issueNumber}](${issue.href})`;
  navigator.clipboard.writeText(link).then(() => {
    console.log("Copied to clipboard: ", link);
  });
})();
