import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeProvider from '../../utils/context/ThemeProvider'

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                 <Footer/>
            </ThemeProvider>
        )
        const NightModeButton = screen.getByRole('button')
        expect(NightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(NightModeButton)
        expect(NightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})