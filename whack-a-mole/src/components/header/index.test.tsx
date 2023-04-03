import { act, screen } from "@testing-library/react"
import { Header } from "."
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test-utils/utils";
import { IData } from "../../models";
import { fetchStatus } from "../../constants";

describe('Header component', () => {

    let preloadStateValue: IData;

    beforeEach(() => {
        preloadStateValue = {
            leaderBoards: [],
            gameData: {
                name: '',
                points: 10,
                isGameActive: false,
            },
            fetchStatus: fetchStatus.Success
        }
    })

    it('should display a button with title Start', () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        expect(screen.getByRole('button', { name: /Start/i })).toBeDefined();
    })

    it('should display a input text with a placeholder', () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        expect(screen.getByPlaceholderText(/Insert your name and play/i)).toBeDefined();
    })

    it('should disable the button until a name is introduced', () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        expect(screen.getByRole('button', { name: /Start/i })).toBeDisabled();
    })

    it('should enabled the button name is introduced', async () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        const button = screen.getByRole('button', { name: /Start/i });
        const inputElement = screen.getByRole('textbox') as HTMLInputElement;

        expect(button).toBeDisabled();

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.type(inputElement, 'andy');
        });
        expect(button).toBeEnabled();
        expect(inputElement.value).toEqual('andy');
    })

    it('should deactivate input and hide start button when game is active', () => {
        preloadStateValue.gameData.isGameActive = true;
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        const button = screen.queryByRole('button', { name: /Start/i });
        const inputElement = screen.getByRole('textbox') as HTMLInputElement;

        expect(inputElement).toBeDisabled();
        expect(button).toBeNull();
    })

    it('should hide reset button when game is inactive', () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        const button = screen.queryByRole('button', { name: /Reset/i });

        expect(button).toBeNull();
    })

    it('should display reset button when game is active', () => {
        preloadStateValue.gameData.isGameActive = true;

        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        const button = screen.getByRole('button', { name: /Reset/i });

        expect(button).toBeDefined();
    })

    it('should hide the button spaces are introduced', async () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        const button = screen.getByRole('button', { name: /Start/i });
        const inputElement = screen.getByRole('textbox') as HTMLInputElement;

        expect(button).toBeDisabled();

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.type(inputElement, '   ');
        });
        expect(button).toBeDisabled();
    })

    it('input should allow max 25 characters', async () => {
        renderWithProviders(<Header />, { preloadedState: { game: preloadStateValue } });
        const inputElement = screen.getByRole('textbox') as HTMLInputElement;

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            userEvent.type(inputElement, '123456789012345678901234567890');
        });
        expect(inputElement.value).toBe('1234567890123456789012345');
    })
}) 