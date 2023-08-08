import Results, { formatJobList, formatFetchParams } from ".";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from "../../utils/test";


const resultmocked = [
  {
    title: 'backend',
    description: 'Difficile à faire'
  },
  {
    title: 'frontend',
    description: 'Plus facile à faire'
  }
]

const server = setupServer(
  rest.get('http://localhost:8000/results', (req, res, ctx) => {
    return res(ctx.json({ resultsData: resultmocked}))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The Results component', () => {
  test('should display the results after the data is loaded', async () => {
    render(<Results />)

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    const jobTitleElements = screen.getAllByTestId('job-title')
    expect(jobTitleElements[0].textContent).toBe('backend')
    expect(jobTitleElements.length).toBe(2)
    const jobDescriptionElements = screen.getAllByTestId('job-description')
    expect(jobDescriptionElements[1].textContent).toBe(
      resultmocked[1].description
    )
    expect(jobDescriptionElements.length).toBe(2)
  })
})



describe('La fonction formatJobList', () => {

    it('should add a comma to the titles', () => {
        const title = 'title,'
        expect(formatJobList('title', 3, 1)).toEqual(title)
    })
    it("should not add a comma to the last title of the array", () => {
        const lastTitleWithoutComma ='title';
        expect(formatJobList('title', 3, 2)).toEqual(lastTitleWithoutComma)
    })
})

describe('The formatQueryParams function', () => {
  
    it('should use the right format for param', () => {
      const expectedState = 'a1=answer1'
      expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(expectedState)
    })
  })