var LeaveOrderGuard = (function () {
    function LeaveOrderGuard() {
    }
    LeaveOrderGuard.prototype.canDeactivate = function (orderComponent, activatedRoute, routeState) {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGuard;
}());
export { LeaveOrderGuard };
//# sourceMappingURL=leave-order.guard.js.map