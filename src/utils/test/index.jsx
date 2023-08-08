import { render as rtlRender} from "@testing-library/react";
import ThemeProvider from "../context/ThemeProvider";
import SurveyProvider from '../context/SurveyProvider'
import { MemoryRouter } from "react-router-dom";

function Wrapper({children}) {
    return (
        <MemoryRouter>
            <ThemeProvider>
                <SurveyProvider>{children}</SurveyProvider>
            </ThemeProvider>
        </MemoryRouter>
    )
}

export function render (ui) {
    rtlRender (ui, {wrapper: Wrapper})
}