import App from './app';

void (async() =>
{
    try
    {
        const app = new App();
        app.build();
        app.listen();
    }
    catch (error)
    {
        console.log(error);
        return error;
    }
})();
