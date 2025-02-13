/// <reference types="cypress" />
import { useCategory } from '../../support/helpers';

context('Test Cluster Extensions views', () => {
  before(() => {
    cy.loginAndSelectCluster();
  });

  // Integration
  describe('Test Integration Extensions', () => {
    useCategory('Integration');

    it('Test Applications', () => {
      cy.checkExtension('Applications');
    });
  });

  // Observability
  describe('Test Observability Extensions', () => {
    useCategory('Observability');

    it('Test Trace Pipelines', () => {
      cy.checkExtension('Trace Pipelines');
    });

    it('Test Log Pipelines', () => {
      cy.checkExtension('Log Pipelines');
    });
  });
});
