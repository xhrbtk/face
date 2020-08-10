function Promise(exe) {
    let self = this
    self.status = 'pending'
    self.vlaue = undefined
    self.reason = undefined
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
        }
    }
    function reject(reson) {
        if (self.status == 'pending') {
            self.status = 'rejected'
            self.reason = reason
        }
    }
    try {
        exe(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
Promise.prototype.then = function(onFufiled, onRejected) {
    let self = this
    if (self.status === 'resolved') {
        onFufiled(self.value)
    }
    if (self.status == 'rejected') {
        onRejected(self.reason)
    }
}
