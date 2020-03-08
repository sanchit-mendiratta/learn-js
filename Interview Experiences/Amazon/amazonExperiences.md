# All Amazon Interview Experiences

## Questions:

- Detect words in a string.
- Create a function to traverse the entire DOM for either an "element", "class" or "id" (Used a simple BFS, treated every element like a graph data structure. Each element has children and I just put that into a queue)
- Recreate a popular social media platform from scratch
- Recreate an Amazon widget in vanilla JavaScript and connect it to a back-end end-point 
- Design a class to model the management hierachy of Amazon. Say that you have Jeff Bezos as CEO, and he has some SVP reporting to him. Each SVP will have their own VP reporting to them. And your job is to design a class to model this architecture. Basically, this is to model a N-nary tree, but each person will have their own list of employees. I tried using a map first, but it turned out that I overthought this problem. Finally we came out a class like this. After this, I was ask to find the first deepest, aka the employee with lowest rank. This is just a DFS problem to find the deepest node.
```
class Employee {
	String name;
	List<String> reportees;
	
	Employee(String name) {
		this.name = name;
		this.reportees = new ArrayList<>();
	}
}
```

## Keep in Mind (Learn)

- Creating re-usable HTML elements and using JavaScript to invoke similar action (with a slight variation to each depending on id)
- Best practices for network requests, eg. using a loader state, error state, success state
- Writing too much CSS or HTML will get you deductions
- DOM manipulation
- Async requests (How promises work and stuff), using old school XHR techniques, async/await and thenable styles
- One tip for somebody wants to interview with Amazon is that their technical problem is not that hard and they will not trick you. You don't need to overthink a lot and use a lot of sophisticated data structure or algorithm that you learn from Leetcode.



### References

1. https://leetcode.com/discuss/interview-experience/508233/Amazon-or-SDE1-Front-End-or-Feb-2020-Rejected
1. https://leetcode.com/discuss/interview-experience/512503/Amazon-or-Front-End-L4-or-Seattle-or-Feb-2020-Offer
1. 
