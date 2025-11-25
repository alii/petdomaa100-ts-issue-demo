Thanks for taking the time to help me. :)

## TLDR;

I'm experimenting with adding type information about the schema of my API to my frontend.

I got it working, the types are inferred from the route handlers and aggregated in a type; `ApiSchema`. Then I import it in the client and have a `fetch` wrapper that uses this type. This works really well!

## The issue

Importing `ApiSchema` on the client creates some problems; it's expecting `@types/bun`.

This is only present when running `tsc`, VS Code's LSP has no issues, all types are fine. (See `typecheck` commands in `client/package.json` & `server/package.json`)

Why does compiler complain while the LSP doesn't?

## My current workaround

Adding `/// <reference types="../server/node_modules/@types/bun" />` to the one file in the client that imports `ApiSchema` and creates the `fetch` wrapper. This stops the TS compiler from complaining but I don't understand enough about that API to say if it's a good solution or not. 

## Other solutions I thought of

Adding `@app/server` as a dev-dependency to the client. I thought this with `skipLibCheck` would solve the issue but it hasn't, so I'm either using it wrong or I misunderstood what that flag does. Also, I would like to avoid this at all costs just in case I accidentally include unwanted code in the client bundle. (Possibly my current method has this footgun too?)

Making `typecheck` behave the same way the LSP is, maybe by making it "global" so it has context of both workspace packages. I haven't managed to make this work.

In my actual repo I have a "shared" workspace package. I could import `ApiSchema` there, add `@types/bun` to that workspace package, and re-export it for the client. I don't know enough about TS to say for sure, but this seems like the same footgun but with extra steps.

I use Vite to bundle my frontend code. It seems to have some options to exclude certain packages from the bundle. I'm currently testing this approach.
