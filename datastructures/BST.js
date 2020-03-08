class BST {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (data < this.data) {
            if (this.left == null) this.left = new BST(data);
            else this.left.insert(data);
        } else {
            if (this.right == null) this.right = new BST(data);
            else this.right.insert(data);
        }
    }
    preorder() {
        console.log(this.data);
        if (this.left != null) this.left.preorder();
        if (this.right != null) this.right.preorder();
    }
    inorder() {
        if (this.left != null) this.left.inorder();
        console.log(this.data);
        if (this.right != null) this.right.inorder();
    }
    postorder() {
        if (this.left != null) this.left.postorder();
        if (this.right != null) this.right.postorder();
        console.log(this.data);
    }
    levelorder() {
        let queue = [];
        queue.push(this);
        while (queue.length) {
            let node = queue.shift();
            console.log(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}
tree1 = new BST(7);
tree1.insert(5);
tree1.insert(8);
tree1.insert(1);
tree1.insert(3);
tree1.insert(9);
tree1.insert(4);
tree1.insert(2);
tree1.insert(6);
console.log(tree1);
tree1.preorder();
console.log("--------")
tree1.inorder();
console.log("--------")
tree1.postorder();
console.log("--------")
tree1.levelorder();
