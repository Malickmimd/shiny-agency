import { MemoryRouter } from 'react-router-dom'
import Home from './'
import { render, screen } from '@testing-library/react'
import ThemeProvider from '../../utils/context/ThemeProvider'

describe('Home', () => {
    it('should have a title', async() => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home/>
                </ThemeProvider>
            </MemoryRouter>
        )
        const title = screen.getByRole('heading', {
            level: 1,
            text: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
        })
        expect(title).toBeTruthy()
    })
})