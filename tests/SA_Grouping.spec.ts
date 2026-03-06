import { test, expect } from '@playwright/test';


test.describe('First Group', async () => {

    test('First Test', async () => {
        console.log(" This is First Test ")
    });


    test('Second Test', async () => {
        console.log(" This is Second Test ")
    });

})


test.describe('Second Group', async () => {

    test('Third Test', async () => {
        console.log(" This is Third Test ")
    });


    test('Fourth Test', async () => {
        console.log(" This is Fourth Test ")
    });

})






