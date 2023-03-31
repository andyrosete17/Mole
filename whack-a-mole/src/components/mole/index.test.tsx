import { act, render, screen } from "@testing-library/react";
import { Mole } from ".";
import userEvent from "@testing-library/user-event";

describe('Mole component', () => {

    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should display a mole image when start', () => {
        render(<Mole isActive />)
        expect(screen.getByRole('img')).toBeDefined();
    })

    it('should display a mole attacking image when isActive is true', () => {
        render(<Mole isActive />)
        const image = screen.getByAltText(/mole-show/i);
        expect(image).toBeDefined();
    })

    it('should do nothing when clicking and the mole is hide', async () => {
        render(<Mole isActive={false} />)
        const image = screen.getByAltText(/mole-hide/i);
        await userEvent.click(image);
        expect(image).toBeDefined();
    })

    it('should hide the mole when is active and pass 2 seconds', async () => {
        render(<Mole isActive />)
        expect(await screen.findByAltText(/mole-show/i)).toBeDefined();

        act(() => jest.advanceTimersByTime(2200))
        expect(screen.getByAltText(/mole-hide/i)).toBeDefined();
    })

    it('should hide the mole when is active and clicking on it', async () => {
        render(<Mole isActive />)
        const image = screen.getByAltText(/mole-show/i);
        await userEvent.click(image);
        expect(screen.getByAltText(/mole-hide/i)).toBeDefined();
    })
}) 