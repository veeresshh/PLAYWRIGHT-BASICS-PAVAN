import { test, expect } from '@playwright/test';


test.beforeAll('BeforeAll', async () => {
    console.log("This is Before All")
})

test.afterAll('AfterAll', async () => {
    console.log("This is After All")
})

test.beforeEach('Beforeach', async () => {

    console.log("This is Before Each")
})

test.afterEach('Aftereach', async () => {

    console.log("This is After Each")
})



test('First Test', async () => {
    console.log("This is First Test")
});

test('Second Test', async () => {
    console.log("This is Second Test")
});

test('Third Test', async () => {
    console.log("This is Third Test")
});

test('Fourth Test', async () => {
    console.log("This is Fourth Test")
});



