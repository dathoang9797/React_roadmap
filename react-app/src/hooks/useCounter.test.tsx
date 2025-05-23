import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';
import { describe } from 'vitest';

//https://www.youtube.com/watch?v=W7CbUiO3_28&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=41
describe('useCounter', () => {
    test("should render the intial count", () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })

    test("should accept and render the same intial count", () => {
        const { result } = renderHook(useCounter, { initialProps: { initialCount: 10 } });
        expect(result.current.count).toBe(10);
    })

    test("should increment the count", () => {
        const { result } = renderHook(useCounter);
        act(() => {
            result.current.increment();
        })
        expect(result.current.count).toBe(1);
    })

    test("should deincrement the count", () => {
        const { result } = renderHook(useCounter);
        act(() => {
            result.current.decrement();
        })
        expect(result.current.count).toBe(-1);
    })
})