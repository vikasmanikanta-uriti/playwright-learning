//authenticated fixture - login
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';

type MyFixtures = {
  loginPage: LoginPage;
  securePage: SecurePage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  securePage: async ({ page }, use) => {
    const securePage = new SecurePage(page);
    await use(securePage);
  },
});

export { expect } from '@playwright/test';




// multiple fixtures

/* import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';

type MyFixtures = {
  loginPage: LoginPage;
  securePage: SecurePage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  securePage: async ({ page }, use) => {
    const securePage = new SecurePage(page);
    await use(securePage);
  },
});*/

// single fixture
/* import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});*/