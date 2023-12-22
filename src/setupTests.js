import '@testing-library/jest-dom';
import { setAppElement } from 'react-modal';

jest.mock('react-modal', () => ({
  setAppElement: jest.fn(),
}));

setAppElement()