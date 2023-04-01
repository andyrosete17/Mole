import { render, screen } from "@testing-library/react";
import { Mole } from ".";
import userEvent from "@testing-library/user-event";

describe('Mole component', () => {
 
    const handleClickMole = jest.fn();

    it('should display a mole image when start', () => {
        render(<Mole isActive handleClickMole={handleClickMole} />)
        expect(screen.getByRole('img')).toBeDefined();
    })

    it('should display a mole attacking image when isActive is true', () => {
        render(<Mole isActive handleClickMole={handleClickMole} />)
        const image = screen.getByAltText(/mole-show/i);
        expect(image).toBeDefined();
    })

    it('should do nothing when handleClickMole is not active and click on the mole', async () => {
        render(<Mole isActive={false}/>)
        const image = screen.getByAltText(/mole-hide/i);
        await userEvent.click(image);
        expect(handleClickMole).not.toBeCalled();
    })
   
    it('should hide the mole when handleClickMole is active and click on the mole', async () => {
        render(<Mole isActive handleClickMole={handleClickMole} />)
        const image = screen.getByAltText(/mole-show/i);
        await userEvent.click(image);
        expect(handleClickMole).toBeCalled();
    })
}) 