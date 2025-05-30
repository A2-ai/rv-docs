---
title: Some example renv projects
description: To be added to main renv
draft: true
---

## Examples

### Example 1 - Installing an incompatible version


### Example 2 - Repository Not Tracked

The retroactive snapshot can lead to packages not being found in repositories, in ways you don't expect. Below is an excerpt from a `renv.lock` file:

```
// renv.lock
{
  "R": {
    "Version": "4.4.1",
    "Repositories": [
      {
        "Name": "PPM",
        "URL": "https://packagemanager.posit.co/cran/2024-10-06"
      }
    ]
  },
  "Packages": {
    "R6": {
      "Package": "R6",
      "Version": "2.5.1",
      "Source": "Repository",
      "Repository": "PPM",
      "Requirements": [
        "R"
      ],
      "Hash": "470851b6d5d0ac559e9d01bb352b4021"
    },
    "glue": {
      "Package": "glue",
      "Version": "3.6.4",
      "Source": "Repository",
      "Repository": "https://cran.rstudio.com",
      "Requirements": [
        "R",
        "utils"
      ],
      "Hash": "47623f66b4e80b3b0587bc5d7b309888"
    }
  }
}
```

At first glance, this renv.lock file should be able to restore. `R6 2.5.1` should come from PPM (`https://packagemanager.posit.co/cran/2024-10-06`) and `glue 3.6.4` should come from `https://cran.rstudio.com`.
But when calling `renv::restore()` we see an interesting error:

```ansi
# Downloading packages ------------------------------------------
- Downloading glue from https://cran.rstudio.com ...    ERROR [error code 22]
[31mWarning: failed to find source for 'glue 3.6.4' in package repositories
Warning: error downloading 'https://packagemanager.posit.co/cran/2024-10-06/
src/contrib/Archive/glue/glue_3.6.4.tar.gz' [error code 22]
Error: failed to retrieve package 'glue@3.6.4'[0m
```

It appears, `glue`, despite it having *some* tracking information regarding its source, is not able to be found. It checks in the specified repository URL, checks the other repository, checks the archive of the other repository,
then fails to retrieve the package. This is a recoverable situation, but annoying and shows some of faults with `renv`'s retroactive source capture.

### Example 3 - Incorrect repository aliases

`renv` tracks the Repository source according to an alias when possible, as seen with `R6` in the example above. As mentioned in the [renv background](#renv), the package information is derived from the DESCRIPTION file, 
meaning the alias is also recorded there upon installation.

Multi-PPM
