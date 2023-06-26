# Example Angular 15 with Carbon Design 15

[//]: # (Starting with 'ng serve'.)

[//]: # (Open localhost:4200 and inspect console => a lot of icon service errors.)

Starting tests with 'jest'

PR https://github.com/carbon-design-system/carbon-components-angular/pull/2608 is breaking the test

```
Cannot read properties of undefined (reading 'isFirstChange')
TypeError: Cannot read properties of undefined (reading 'isFirstChange')
    at IconDirective.ngOnChanges (C:\Work\angular-training-2\a15-carbon-jest\node_modules\carbon-components-angular\fesm2020\carbon-components-angular-icon.mjs:285:22)
    at IconDirective.rememberChangeHistoryAndInvokeOnChangesHook (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:1521:14)
    at callHook (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:2444:18)
    at callHooks (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:2403:17)
    at executeInitAndCheckHooks (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:2354:9)
    at refreshView (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:10341:21)
    at refreshEmbeddedViews (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:11339:17)
    at refreshView (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:10350:9)
    at refreshComponent (C:\Work\angular-training-2\a15-carbon-jest\node_modules\@angular\core\fesm2020\core.mjs:11385:13)
    ...
```