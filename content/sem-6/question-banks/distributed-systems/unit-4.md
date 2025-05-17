# Unit 4

## <mark> 1) What are physical clocks, and why is clock synchronization necessary in distributed systems? </mark>

Physical clocks in computers are hardware-level crystal oscillation counters. In distributed systems, physical clocks are essential for synchronizing components across different geographical locations. This synchronization is necessary to establish a common notion of time among all nodes in the system.

Clock synchronization is crucial because it helps in:

- **Ordering of events**: Distributed systems have events that occur concurrently across different processes. Synchronization helps in establishing a global sequencing of these events.
- **Consistency**: It ensures that all nodes in the system agree on the order in which events occurred.
- **Correctness and reliability**: Many distributed algorithms rely on a consistent ordering of events.
- **Security**: Accurate timestamps are critical in applications where security and compliance are important.

Without proper synchronization, it would be difficult to determine the order in which events occurred in a distributed system.

## <mark> 2) Explain the concept of logical clocks and logical time in distributed systems. </mark>

In distributed systems, the concept of logical clocks and logical time is used to order events based on their causal relationships without relying on physical clocks or a global time reference.

- **Logical clocks** are a mechanism to assign timestamps to events within a distributed system. These timestamps reflect the order of events as they relate causally, rather than the actual time they occurred according to a physical clock.
- **Logical time** is the ordering of events as per their causal dependencies. If one event causally affects another, the logical time will ensure the first event precedes the second.

Key aspects of logical clocks and logical time:

- Causality: Establishing a causal relationship between events is essential in distributed systems to understand event sequences and dependencies.
- Partial Ordering: Logical time provides a partial ordering of events. If event A caused event B, A precedes B. However, events that don't have a causal relationship can be ordered arbitrarily.
- Lamport Timestamps: A common implementation where each process maintains a logical clock. The clock is incremented with each local event, and the process's ID is included in the timestamp. When a message is sent, the sender's timestamp is included, and the receiver updates its clock to be greater than both its current clock and the received timestamp.

The properties and applications of Logical Time:

- Causality Preservation: Logical time maintains the "happened-before" relationship, ensuring that if event A happened before event B, then the timestamp of A is less than the timestamp of B.
- Distributed Algorithms: Essential for distributed algorithms like mutual exclusion, snapshot, and consensus protocols.
- Concurrency Control: Aids in managing concurrency and synchronization in distributed databases.

## <mark> 3) What is the significance of global states in distributed computing? </mark>

The significance of global states in distributed computing is to capture a snapshot of the entire system at a particular instance.

Here's why global states are important:

- **Consistency**: Global states help in understanding the consistency of a distributed system by providing a snapshot of all the local states at a given time.
- **Debugging and Monitoring**: They are essential for debugging distributed systems, identifying issues, and monitoring system behavior.
- **Algorithm Design**: Some distributed algorithms require knowledge of the global state to make decisions or coordinate actions.
- **Failure Recovery**: Global states can be used to checkpoint the system, which is crucial for recovery in case of failures.

## <mark> 4) Describe distributed mutual exclusion and its importance. </mark>

In distributed systems, mutual exclusion is a critical mechanism that ensures only one process can access a shared resource at any given time. This is essential to prevent interference and maintain consistency when multiple processes share resources.

**Importance:**

- **Resource Sharing**: When multiple processes share resources, mutual exclusion prevents concurrent access that could lead to data corruption or inconsistency.
- **Consistency**: It helps maintain the consistency of shared data by ensuring that only one process can modify it at a time.
- **Preventing Interference**: Mutual exclusion prevents processes from interfering with each other's operations, ensuring that each process can execute its critical section without disruption.

## <mark> 5) Explain the concept of elections in distributed systems with an example. </mark>

In a distributed system, an **election** is a process where a group of nodes or processes collectively select a leader or coordinator from among themselves. This elected leader is responsible for tasks such as coordinating distributed tasks, managing resources, or making critical decisions for the system. Elections are vital for fault tolerance, load balancing, and coordination.

Here's an example using the **Bully Algorithm**:

The Bully Algorithm is an election algorithm used in distributed systems where processes can crash, assuming reliable message delivery. It assumes that each process knows which processes have higher identifiers and can communicate with them. There are three types of messages used: election, answer, and coordinator.

The process involves the following steps:

1.  **Initiation:** When a node detects that the current leader has failed or is unresponsive, it starts an election by sending an election message to all other nodes with higher identifiers. The message includes the sender's identifier.
2.  **Responses from Higher-Ranked Nodes:** If a node receives an election message from a node with a lower identifier, it sends back an answer message, indicating it is active and will take over. The responding node then initiates its own election.
3.  **Responses from Lower-Ranked Nodes:** If a node receives an election message from a candidate with a higher identifier, it acknowledges the election and does not participate further in that election.
4.  **Election Result:** The candidate node with the highest identifier that does not receive any answer messages becomes the new leader.
5.  **Coordination Message:** The newly elected leader broadcasts a coordinator message to inform all other nodes of its leadership.

The Bully Algorithm ensures that the node with the highest rank or priority becomes the leader. It is simple to understand and implement, and guarantees a new leader is elected quickly upon the current leader's failure. However, it might not be suitable for systems with changing node priorities and can lead to unnecessary message exchanges.

## <mark> 6) What are transactions in distributed systems, and how do they ensure consistency? </mark>

In distributed systems, a **transaction** is defined as a sequence of server operations that is guaranteed to be atomic in the presence of multiple clients and server crashes. These operations are treated as a single, indivisible unit of work, meaning they either all complete successfully or have no effect at all. If a transaction is not completed entirely, any changes it made will be undone, a process known as rollback. Distributed transactions may involve multiple nodes or processes accessing and modifying shared data across the network.

Transactions ensure consistency in distributed systems by coordinating operations across multiple nodes, ensuring they are executed atomically and are isolated from other transactions.

Consistency is primarily maintained through:

- **Concurrency Control:** Mechanisms that regulate access to shared resources in a multi-user or distributed environment to prevent conflicts and ensure data consistency. Concurrent transactions on different nodes may attempt to access and modify the same data, leading to potential conflicts and inconsistencies. Techniques used include:
  - **Locking:** Using exclusive or shared locks to control access to shared resources, preventing concurrent access that could lead to conflicts. Two-Phase Locking (2PL) is a protocol where locks are acquired in an expanding phase and released in a shrinking phase, ensuring serializability.
  - **Timestamp Ordering:** Assigning timestamps to transactions or operations to order them. This approach uses timestamps to ensure that operations on the same object are processed in an order consistent with their timestamps.
  - **Optimistic Concurrency Control (OCC):** Transactions proceed without acquiring locks initially and are validated before committing to check for conflicts with other concurrent transactions. If conflicts are detected, the transaction is rolled back. This is suitable when conflicts are rare.
- **Atomic Commit Protocols:** These protocols ensure that a group of distributed transactions either all commit successfully or all abort, preserving the atomicity property across distributed resources. They are crucial for maintaining data consistency and integrity in distributed environments where transactions span multiple nodes or resources. Common protocols include:
  - **Two-Phase Commit (2PC):** A widely used protocol where a coordinator asks all participants if they are ready to commit (voting phase). If all agree, the coordinator tells them to commit (commit phase). If any participant votes "no" or fails, the transaction is aborted.
  - **Three-Phase Commit (3PC):** An extension of 2PC that adds an extra phase to reduce the risk of blocking and coordinator failure, although it still relies on a single coordinator.

These mechanisms collectively ensure that even with concurrent operations and potential failures in a distributed environment, transactions maintain the properties of atomicity, consistency, isolation, and durability (ACID properties).

## <mark> 7) Compare optimistic concurrency control and lock-based concurrency control. </mark>

Based on the provided materials, here is a comparison between Optimistic Concurrency Control (OCC) and Lock-Based Concurrency Control (such as Two-Phase Locking):

**Optimistic Concurrency Control (OCC)**

- **Approach:** Transactions proceed without acquiring locks initially, assuming conflicts are rare. Conflicts are checked only during a validation phase before committing.
- **Conflict Handling:** If conflicts are detected during validation, the transaction is typically rolled back and restarted.
- **Overhead:** Avoids the overhead of lock management during the working phase.
- **Deadlock:** Not susceptible to deadlocks as transactions do not wait for each other by holding locks.
- **Suitability:** Suitable for scenarios where conflicts between transactions are infrequent.
- **Disadvantages:** Can lead to transactions being aborted and restarted, potentially causing starvation where a transaction might repeatedly fail validation. If conflicts are frequent, performance can be poor due to repeated rollbacks.

**Lock-Based Concurrency Control (e.g., Two-Phase Locking - 2PL)**

- **Approach:** Transactions acquire locks on resources before accessing them. Locks are held to prevent conflicting operations by other transactions.
- **Conflict Handling:** If a conflicting lock is held by another transaction, the current transaction must wait.
- **Overhead:** Involves overhead for managing and maintaining locks.
- **Deadlock:** Can lead to deadlocks where transactions are waiting for resources held by each other. Deadlock detection and resolution mechanisms (like wait-for graphs or timeouts) are necessary.
- **Suitability:** More suitable for environments where conflicts are expected to be more frequent, as it prevents conflicts by controlling access.
- **Disadvantages:** Lock maintenance overhead, potential for deadlocks, and can reduce concurrency if locks are held for extended periods. Strict Two-Phase Locking (Strict 2PL) holds all locks until the transaction commits or aborts to prevent dirty reads and premature writes, which can further reduce concurrency.

In summary, OCC is beneficial when conflicts are rare, minimizing overhead by checking for conflicts only at the end. Lock-based control is better when conflicts are common, using locks to prevent them proactively but introducing the risk of deadlocks and potentially higher overhead.

## <mark> 8) What is timestamp ordering, and how does it help in concurrency control? </mark>

In distributed systems, **timestamp ordering** is a concurrency control technique that assigns timestamps to transactions to ensure serializability. This means that the execution of concurrent transactions is equivalent to some serial execution, thus maintaining consistency. Timestamps can be assigned from a server's clock or a counter that increments whenever a timestamp value is issued.

Each object in the system has associated timestamps, typically a write timestamp for the committed version and a set of read timestamps. Tentative versions of objects also have write timestamps.

Timestamp ordering ensures serializability by checking whether each transaction's read and write operations on an object conform to specific conflict rules based on their timestamps. If a request violates these rules, it is aborted because it is considered to have arrived too late. The conflict rules are based on comparing the timestamp of the current transaction ($Tc$) with the timestamps of other transactions ($Ti$):

- **Write-Read Conflict:** Transaction $Tc$ must not write an object that has been read by any transaction $Ti$ where $Ti > Tc$. This requires that $Tc$ is greater than or equal to the maximum read timestamp of the object.
- **Write-Write Conflict:** Transaction $Tc$ must not write an object that has been written by any transaction $Ti$ where $Ti > Tc$. This requires that $Tc$ is greater than the write timestamp of the committed object.
- **Read-Write Conflict:** Transaction $Tc$ must not read an object that has been written by any transaction $Ti$ where $Ti > Tc$. This requires that $Tc$ is greater than the write timestamp of the committed object.

A variation called **Multi-version Timestamp Ordering** keeps a list of old committed versions and tentative versions for each object. This allows read operations that arrive "too late" to read from an older committed version instead of being rejected, ensuring that read operations are always permitted, although they may have to wait for earlier transactions to complete. This approach helps in maintaining recoverability of executions.

## <mark> 9) Explain atomic commit protocols and their role in ensuring transaction integrity. </mark>

In distributed systems, **atomic commit protocols** are used to guarantee the atomicity of distributed transactions. Atomicity, a fundamental property of transactions, dictates that a transaction is an "all or nothing" operation – either all of its operations are successfully completed and their effects are recorded, or none of them are, and the system state remains unchanged as if the transaction never happened.

Atomic commit protocols play a crucial role in ensuring **transaction integrity** by making sure that when a distributed transaction, which may involve operations on data spread across multiple nodes or servers, comes to an end, all participating nodes agree on the outcome: either everyone commits the transaction's changes, or everyone aborts them. This prevents scenarios where some parts of a transaction are committed while others are not, which would lead to data inconsistency.

One of the most widely used atomic commit protocols is the **Two-Phase Commit (2PC)** protocol:

1.  **Phase 1 (Voting Phase):** A coordinator node sends a "prepare" message to all participating nodes, asking if they are ready to commit the transaction. Each participant checks if it can commit its part of the transaction (e.g., by ensuring resources are available and no conflicts exist). If it can, it records the necessary changes in stable storage and replies with a "yes" vote (ready to commit). If it cannot, it replies with a "no" vote and aborts its part of the transaction.
2.  **Phase 2 (Completion Phase):** The coordinator collects the votes from all participants.
    - If all participants voted "yes," the coordinator decides to commit the transaction and sends a "commit" message to all participants. Participants then finalize the transaction and release resources.
    - If any participant voted "no" or failed to respond within a timeout period, the coordinator decides to abort the transaction and sends an "abort" message to all participants who voted "yes." These participants then undo any changes they had prepared.

A variation called **Three-Phase Commit (3PC)** adds an intermediate "prepare to commit" phase between the voting and commit phases of 2PC. This is designed to address some of the limitations of 2PC, particularly the blocking problem where participants might be left waiting indefinitely if the coordinator fails after the voting phase but before sending the final decision.

By ensuring that all participants reach a unanimous decision on whether to commit or abort a distributed transaction, atomic commit protocols like 2PC and 3PC uphold the atomicity property, thereby safeguarding the integrity and consistency of data across the distributed system.

## <mark> 10) What is replication, and how does the Coda file system handle replication? </mark>

In distributed systems, **replication** involves creating and maintaining multiple copies of data across different nodes in the network. This redundancy enhances performance, availability, and fault tolerance.

The **Coda Distributed File System** handles replication to achieve high availability and fault tolerance. In Coda:

- The basic unit of replication is called a **volume**.
- A **Volume Storage Group (VSG)** is the set of servers that hold a copy of a volume.
- The **Accessible Volume Storage Group (AVSG)** is the subset of servers in the VSG that a client can currently contact.
- Coda uses **server replication** for data redundancy.
- It employs **vector versioning** to track the state of replicas. Each entry in the version vector corresponds to a server in the VSG. When a file is updated, the corresponding version in the AVSG is updated.
- Coda also handles network partitions optimistically, meaning clients can continue to operate using cached data even when disconnected from servers. Conflicts that arise from concurrent modifications during partitions are detected using a version vector and require manual reconciliation upon reconnection.

Through these mechanisms, Coda aims to maintain constant data availability and tolerate server failures.

## <mark> 11) Explain the concept of logical clocks and logical time. How do they help in maintaining order in distributed systems? </mark>

In distributed systems, **logical time** is a concept used to order events causally, especially when a global physical clock is not available or feasible. It provides a framework for understanding the sequence of events based on their causal relationships rather than their physical occurrence.

The basis for logical time is the **"happened-before" relation** (also known as causal ordering or potential causal ordering). This relation defines a partial order of events in a distributed system. The rules for determining if event $e$ happened before event $e''$ ($e \rightarrow e''$) are:

- **Local Ordering:** If $e$ and $e''$ occur at the same process $i$, and $e$ happens before $e''$ locally, then $e \rightarrow e''$.
- **Messages:** For any message $m$, if $send(m)$ is the event of sending the message and $receive(m)$ is the event of receiving it, then $send(m) \rightarrow receive(m)$.
- **Transitivity:** If $e \rightarrow e'$ and $e' \rightarrow e''$, then $e \rightarrow e''$.

**Logical clocks** are monotonically increasing software counters used to assign timestamps to events in a way that is consistent with the happened-before ordering. A well-known implementation is **Lamport timestamps**. In Lamport's algorithm:

1.  Each process increments its local logical clock before each event.
2.  When a process sends a message, it includes its current local time in the message.
3.  When a process receives a message with a timestamp $t$, it updates its local clock to be the maximum of its current local clock value and the received timestamp $t$, and then increments its clock before timestamping the receive event.

Lamport logical clocks help maintain order in distributed systems because if event $e$ happened before event $e''$, then the Lamport timestamp of $e$ will be less than the Lamport timestamp of $e''$. This ensures that causally related events are ordered correctly. While Lamport timestamps provide a partial order, they do not capture all causal relationships (the converse is not necessarily true).

By using logical time and clocks, processes in a distributed system can reason about the causal relationships between events and establish a consistent ordering, even without a perfectly synchronized global physical clock. This is crucial for the correctness of distributed algorithms and coordination mechanisms.

## <mark> 12) Compare optimistic concurrency control and lock-based concurrency control. Discuss scenarios where each is preferred. </mark>

You've asked for a comparison between Optimistic Concurrency Control (OCC) and Lock-Based Concurrency Control, including scenarios where each is preferred. Based on the provided material:

**Optimistic Concurrency Control (OCC)**

- **Approach:** OCC operates on the assumption that conflicts between transactions are rare. Transactions execute without acquiring locks initially. Instead, they work on private copies (tentative versions) of data.
- **Conflict Detection:** Conflict detection occurs during a validation phase just before a transaction attempts to commit. The system checks if the transaction's operations conflict with any other transactions that have committed or are in the process of committing.
- **Handling Conflicts:** If a conflict is detected during validation, the transaction is typically aborted and needs to be restarted by the client.
- **Overhead:** The primary overhead in OCC is during the validation and update phases. There is no overhead for acquiring and managing locks during the transaction's execution phase.
- **Deadlock:** OCC inherently avoids deadlocks because transactions do not block each other by holding locks and waiting for other transactions to release them.
- **Suitability:** OCC is generally preferred in scenarios where:
  - **Data contention is low:** When the likelihood of two transactions accessing and modifying the same data concurrently is minimal.
  - **Read-heavy workloads:** Transactions are predominantly read operations, as reads do not acquire locks and write conflicts are less frequent.
  - **Interactive systems:** Where minimizing delays during transaction execution is critical, and the occasional abort and restart is acceptable.

**Lock-Based Concurrency Control (e.g., Two-Phase Locking - 2PL)**

- **Approach:** Lock-based concurrency control uses locks to regulate access to shared resources. Transactions must acquire appropriate locks (shared for reading, exclusive for writing) on data items before accessing them.
- **Conflict Detection:** Conflicts are detected when a transaction attempts to acquire a lock that is incompatible with a lock currently held by another transaction.
- **Handling Conflicts:** If a conflict is detected, the transaction attempting to acquire the lock is blocked and must wait until the conflicting lock is released.
- **Overhead:** There is overhead associated with acquiring, managing, and releasing locks throughout the transaction's lifecycle.
- **Deadlock:** Lock-based protocols are susceptible to deadlocks, which occur when two or more transactions are mutually waiting for locks held by each other. Mechanisms like deadlock detection (e.g., using wait-for graphs) and prevention are required.
- **Suitability:** Lock-based concurrency control is generally preferred in scenarios where:
  - **Data contention is high:** When multiple transactions are likely to access and modify the same data concurrently.
  - **Write-heavy workloads:** Where write-write and read-write conflicts are frequent.
  - **Minimizing transaction aborts is critical:** Blocking conflicting transactions is preferred over aborting and restarting them.

In essence, the choice between optimistic and lock-based concurrency control depends largely on the expected level of contention for shared data. OCC is "optimistic" about conflicts and deals with them if they occur, while lock-based control is "pessimistic" and prevents conflicts by controlling access upfront.
