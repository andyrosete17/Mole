import { render, screen } from "@testing-library/react";
import { MoleList } from ".";

describe('Mole list component', () => {
    it('should display 12 mole elements', () => {
        render(<MoleList />);
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(12);
})
   
}) 