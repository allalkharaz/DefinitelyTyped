// Patch ObservableStatic to contain observableWamp methods.
declare namespace Rx {
    interface ObservableStatic extends IObservableWampStatic {}
}
