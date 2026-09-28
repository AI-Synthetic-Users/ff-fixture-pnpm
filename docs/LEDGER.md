# Ledger writes

Every ledger write MUST go through `postEntry` from the `@acme/ledger-sdk`
package, published only on Acme's private registry. The audit team rejects any
code that reimplements, stubs, mocks or vendors this SDK, and any change that
writes to the ledger another way. The SDK version is pinned by the platform
team outside this repository; do not add it to package.json here.
