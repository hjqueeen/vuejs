# Tech Stack Compatibility Report
**node-sass Version Recommendation for Node.js 12 + Bootstrap 4.4.1**

---

## Summary

After reviewing official release documentation and compatibility matrices, **node-sass@4.14.1** is the most reliable and verified version to use with **Node.js 12** and **Bootstrap 4.4.1**.

---

## Recommended Configuration

| Component     | Version      |
|---------------|--------------|
| Node.js       | 12.x         |
| Bootstrap     | 4.4.1        |
| node-sass     | **4.14.1**   |
| sass-loader   | **10.1.1**   |

```bash
npm install node-sass@4.14.1
```

---

## Rationale & Sources

### 1. Bootstrap 4 officially used Node Sass as its Sass compiler
> Bootstrap v4 uses Node Sass for compiling Sass source files into CSS files in its build process.

**Source:** [Bootstrap v4.6 Build Tools Docs](https://getbootstrap.com/docs/4.6/getting-started/build-tools/)

---

### 2. node-sass 4.12 was the first version to support Node.js 12
> node-sass 4.12.0 release notes show Node 12 added to the supported environments table for Windows, OSX, and Linux for the first time.

**Source:** [node-sass v4.12.0 release notes (code.usgs.gov mirror)](https://code.usgs.gov/wma/iow/wdfn-viz/-/merge_requests/98)

---

### 3. node-sass 4.14 is the most stable release for Node.js 12
> node-sass 4.14+ supports Node.js 14.x, with Node.js 12 confirmed as the minimum supported version of the library at this release.

**Source:** [GitLab gitlab-ui Issue #1014](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1014)

---

### 4. Node.js 12 support was dropped from node-sass 8.x onward
> The node-sass 8.x release notes show only Node 14, 16, 18, and 19 in the supported environments matrix — Node 12 was explicitly removed.

**Source:** [node-sass GitHub Releases page](https://github.com/sass/node-sass/releases)

---

## Important Note

node-sass (LibSass) has been **officially deprecated** since October 2020. While it continues to work for this stack, migrating to **Dart Sass (`sass` package)** is strongly recommended for any new projects.

> As of October 26, 2020, LibSass and packages built on top of it — including Node Sass — are deprecated.

**Source:** [Bootstrap v4.6 Build Tools Docs](https://getbootstrap.com/docs/4.6/getting-started/build-tools/)

---

*Report prepared: May 2026*