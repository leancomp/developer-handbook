(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{417:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"storage"}},[e._v("Storage")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[e._v("Introduction")]),e._v(" "),a("p",[e._v("Kubernetes can consume storage solutions deployed either as:")]),e._v(" "),a("h3",{attrs:{id:"_1-internal-storage"}},[e._v("1 - Internal Storage")]),e._v(" "),a("p",[e._v("a part of a cluster (internal storage) or")]),e._v(" "),a("p",[e._v("Deploying a workload storage solution as a part of a cluster (internal storage) will limit access to the storage to workloads running inside the cluster. This will be more secure than deploying an external instance of the storage provider, but also limits who can consume the storage unless steps are taken to expose the storage outside the cluster.")]),e._v(" "),a("h3",{attrs:{id:"_2-external-storage"}},[e._v("2- External Storage")]),e._v(" "),a("p",[e._v("storage provided by an external service (external storage).")]),e._v(" "),a("h3",{attrs:{id:"internal-or-external"}},[e._v("Internal or External?")]),e._v(" "),a("p",[e._v("The use case will determine which you choose to deploy.")]),e._v(" "),a("p",[e._v("If your objective is to have a large storage solution which can be consumed by multiple kubernetes clusters or non-kubernetes workloads, then your solution should include an instance of the storage provider which is external to the k8s cluster and then integrate your k8s instance with that storage provider via storage classes.")]),e._v(" "),a("p",[e._v("If your objective is to have a secure storage solution which is only supporting a single k8s cluster, then you will want to deploy a storage provider inside the cluster and point your storage classes to the internal instance.")]),e._v(" "),a("p",[e._v("Another alternative is to have a single k8s cluster which implements an internal storage provider but exposes the API service outside the cluster. This could then be used as a storage provider for other k8s clusters.")]),e._v(" "),a("h2",{attrs:{id:"storage-types"}},[e._v("Storage Types")]),e._v(" "),a("h3",{attrs:{id:"_1-physical-storage"}},[e._v("1 - Physical Storage")]),e._v(" "),a("p",[e._v("The physical storage which is used to back cloud storage technologies is important, especially in a kubernetes environment. kuberetes master nodes utilize an etcd database and in an HA environment, at least three different instances of etcd. etcd is a high IOPS (Input/Output Operations Per Second) application which writes a large volume of data to the disk. The performance of this database is critical to the performance of the cluster and the larger the cluster, the more data gets written")]),e._v(" "),a("p",[e._v("For this reason, it is critical that the storage backing the filesystems where the etcd database is written be the fastest storage technology available.")]),e._v(" "),a("p",[e._v("It should be noted that one need not necessarily implement NVMe drives to get the best performance. Spreading the IOPS across hundreds of spindles on mechanical drives (such as is done with IBM Elastic Storage Servers) can also be very fast.")]),e._v(" "),a("p",[e._v("Additionally, running NVMe drives with a slow virtual storage technology can render them no faster than a mechanical disk.")]),e._v(" "),a("p",[e._v("See the On-Premesis Storage Infrastructure below for more infrastruction on recommendations on how to properly configure physical storage infrastructure for maximum performance.")]),e._v(" "),a("h3",{attrs:{id:"_2-block-storage"}},[e._v("2 - Block Storage")]),e._v(" "),a("p",[e._v("Block storage technologies provide raw chunks of storage which usually must be formatted before they can be used.")]),e._v(" "),a("p",[e._v("One example of block storage would be a LUN/Volume created on a SAN storage device which can be mapped to a remote host and appears to that host as a physical disk.")]),e._v(" "),a("p",[e._v("Another example would be a Ceph RBD volume. Once created and mapped to a host, such a disk shows up on the filesystem like any other disk.")]),e._v(" "),a("p",[e._v("In both of these cases the block storage volume must be formatted with a filesystem before it can be used. This detail is hidden in the Ceph kubernetes storage provider because the Ceph storage driver will put a filesystem on the block device prior to mounting to the container. It is still a block device, it has just been formatted prior to use.")]),e._v(" "),a("h3",{attrs:{id:"_3-file-storage"}},[e._v("3 - File Storage")]),e._v(" "),a("p",[e._v("File storage is a storage device which is provided pre-formatted with a file system prior to making it available to be mounted.")]),e._v(" "),a("p",[e._v("Probaly the best example of this type of storage is NFS (Network File System). NFS filesytems are exported by an NFS server and have already been formatted before they are exported. Clients that mount these filesystems do not have to format the device prior to use.")]),e._v(" "),a("p",[e._v("Another good example of file storage would be CephFS.")]),e._v(" "),a("h3",{attrs:{id:"_4-object-storage"}},[e._v("4 - Object Storage")]),e._v(" "),a("p",[e._v("Object storage is simply a database which has some kind of an API which can be used for storing chunks of data, either formatted or unformatted. Object storage need not be mounted to a filesystem to be used, data is normally storage via REST API calls or SQL commands.")]),e._v(" "),a("p",[e._v("In cloud native applications, it is very common to deploy a separate module/pod/container which contains a database which can then be exposed to the application for object storage. In this case, the container hosting the object database will likely need file or block storage to hold the database files, but the application itself will consume the objec storage provided by the database.")]),e._v(" "),a("p",[e._v("In other cases, applications could consume object storage which is hosted somewhere out on the internet or on some legacy physical infrastructure.")]),e._v(" "),a("p",[e._v("Examples of object storage technologies would be Redis, CouchDB/Cloudant, minio, mongoDB, mariaDB, etc.")]),e._v(" "),a("p",[e._v("Example of hosted object storage technologies woudl be cloudant.com, redis.com, or an existing DB2 database hosted on legacy infrastructure in the enterprise.")]),e._v(" "),a("h2",{attrs:{id:"on-premises-storage-infrastructure"}},[e._v("On-Premises Storage Infrastructure")]),e._v(" "),a("h3",{attrs:{id:"san-storage-area-network-vs-converged-networking"}},[e._v("SAN (Storage Area Network) vs Converged Networking")]),e._v(" "),a("p",[e._v("There has been a significant amount of discussion around the topic of converged or hyper-converted networks. A converged network is one where data and storage network traffic are combined onto a single infrastructure. The topic is much more broad than this simple statement, but this is the aspect that is of most concern to the cloud storage topic.")]),e._v(" "),a("p",[e._v("Experience shows that a converged or hyper-conconverged infrastructure may or may not provide better performance based on a number of factors. We will not attempt to make a recommendation on whether a company should use SAN or a converged or hyper-converged infrastructure, but one thing that will be clear from doing benchmarking is that what is advertised to be better, faster technology may not be if it is not implemented in the right way.")]),e._v(" "),a("p",[e._v("Prior to choosing a storage technology it is highly recommended that proper performance testing be performed to ensure that the architecture to be implemented provides the performance that is desired and expected.")]),e._v(" "),a("p",[e._v("Experience shows that storage provider technologies which provide block storage over the data network (such as Ceph or Gluster) consume a significant number of CPU cycles serving up disk I/O over a network which is designed for traditional data.")]),e._v(" "),a("p",[e._v("SAN storage technologies are designed for disk I/O traffic and the performance of an 8GB SAN will greatly out-perform a 10GB data network in a converged environment.")]),e._v(" "),a("h3",{attrs:{id:"storage-network-congestion-in-a-kubernetes-environment"}},[e._v("Storage Network Congestion in a kubernetes Environment")]),e._v(" "),a("p",[e._v("Storage traffic patterns in a kubernetes environment is significantly different than in a traditional physical or even virtual environment.")]),e._v(" "),a("p",[e._v("Historically, physical infrastructures were easy enough to understand because each physical machine was an endpoint and occupied one port on a SAN switch. Communication paths over the SAN are well known and constant.")]),e._v(" "),a("p",[e._v("The advent of virtual networks changed things a bit in that in a virtual environment you could now have many more volumes mapped to a single physical host. In an HPC (High Performance Computing) environment, a single physical node could have dozens or more virtual machines, each of which could have a volume served up over the SAN.")]),e._v(" "),a("p",[e._v("Ultimately, however, virtual machines do not move around very much and when they do, they move to other physical machines utilizing the same mount points which were setup ahead of time and do not change.")]),e._v(" "),a("p",[e._v("In the world of kubernetes, however, workloads are moved around in the infrastructure and scale out and back with regularity. As workloads move to different worker nodes these volumes are moved around to various machines. This leads to a situation where storage traffic can become significantly unbalanced on the SAN and a single compute node could potentially have hundreds of endpoints depending on the number of containers running on the node.")]),e._v(" "),a("p",[e._v("SAN networks can become congested not only because of high traffic, but also because of a high number of endpoints behind a single SAN switch port. In an HPC environment where a single physical node could host dozens of virtual machines and each virtual machine could be hosting hundreds or even thousands of endpoints in a dynamically provisoined environment, network congestion can become a significant problem.")]),e._v(" "),a("p",[e._v("When the SAN network becomes congested, it can backup across the SAN infrastructure negatively impacting completely unrelated workloads.")]),e._v(" "),a("p",[e._v("In relatively small kubernetes environments, this type of congestion is normally not a problem, however, large clusters with hundreds or thousands of worker nodes or an environment which is hosting dozens or hundreds of smaller clusters, significant network congestion can be a significant problem, especially when workload storage is being provided inside the cluster itself (vs externally hosted cloud storage).")]),e._v(" "),a("h2",{attrs:{id:"kubernetes-storage-concepts"}},[e._v("Kubernetes Storage Concepts")]),e._v(" "),a("h3",{attrs:{id:"persistent-volumes-and-persistent-volume-claims"}},[e._v("Persistent Volumes and Persistent Volume Claims")]),e._v(" "),a("p",[e._v("In kubernetes, the request for storage by an application is abstracted from the storage source. Other than some of the basic storage attributes discussed below the application does not typically know nor care where the storage comes from. Those details can be exposed to the application if needed for some reason, but typically, an application asks for the storage attributes it needs and the platform decides where it comes from.")]),e._v(" "),a("p",[e._v("The chunk of storage made available for the application to consume is called a Persistent Volume or PV.")]),e._v(" "),a("p",[e._v("When an application needs some persistent storage it creates a request called a Peristent Volume Claim or PVC. When presented with a PVC, the platform will find a PV that meets the need and then bind the PVC to the PV. Once a PV is bound, it is then unavailable to be bound to any other PVC unless it is a ReadWriteMany (discussed below) request which allows a single PV to be bound to many PVCs.")]),e._v(" "),a("h3",{attrs:{id:"dynamic-vs-static"}},[e._v("Dynamic vs Static")]),e._v(" "),a("p",[e._v("A static PV is one which is created ahead of time by a system operator who would typically create a number of different PVs with different types of attributes to account for various types of PVCs that may want to consume them.")]),e._v(" "),a("p",[e._v("A dynamic PV, however, is one which is created on demand. With a dynamic storage provider, when an application creates a PVC request the storage provider will create a PV that meets all of the requirements of the PVC and the platform will bind it to the PVC on the fly. This precludes the need for manually creating a PV for any given storage request.")]),e._v(" "),a("h3",{attrs:{id:"data-retention-modes"}},[e._v("Data Retention Modes")]),e._v(" "),a("p",[e._v("One of the requirements of a PV is its Data Retention Mode. This describes what happens to the data when the PVC which is bound to it is deleted - such as when an application is deleted from the cluster.")]),e._v(" "),a("h4",{attrs:{id:"_1-retain"}},[e._v("1 - Retain")]),e._v(" "),a("p",[e._v("If the retention mode is set to retain the PV is not deleted and no data on the PV is deleted. This is typically used when an application is uninstalled to be replaced by a newer version and the data should be retained between installations. It could also be used to make sure that the data in the PV is backed up before being removed.")]),e._v(" "),a("p",[e._v("IMPORTANT: A PV with a retention mode set to retain is never removed by the system and must be manually removed when it is no longer needed. If this manual removal never happens and many applications are deployed this way, it could result in significant storage utilization growth over time. As a result, this retention mode should be used with caution.")]),e._v(" "),a("h4",{attrs:{id:"_2-delete"}},[e._v("2 - Delete")]),e._v(" "),a("p",[e._v("A PV with a retention mode set to delete will cause the PV to be deleted when the PVC that is bound to it is deleted. This will result in the loss of any data which exists on the PV when it is deleted. This is typically only used with dynamically created PVs.")]),e._v(" "),a("h4",{attrs:{id:"_3-recycle"}},[e._v("3 - Recycle")]),e._v(" "),a("p",[e._v("When a PV has a retention mode of recycle the platform will try to remove any data on the PV and put it back into the pool to be bound to another PVC at some future time.")]),e._v(" "),a("p",[e._v("WARNING: When a PV has a recycle retention mode the platform will execute an rm -rf / on the root of the PV. If the PV is an NFS volume and the path of the NFS mount is the root of the NFS server it will effectively wipe the NFS server. If the PV is a hostPath (a path on the local disk) and the path is set to /, the platform will wipe the entire local disk. Usage of this retention mode should be used with extreme caution and it is highly recommended that hostPath storage not be used with a kubernetes cluster.")]),e._v(" "),a("h3",{attrs:{id:"access-modes"}},[e._v("Access Modes")]),e._v(" "),a("p",[e._v("Storage Access Modes define how a pod will use the PV. Note that the smallest unit of control in a kubernetes environment is a pod. If a PV is mounted to a pod it is mounted to all containers in the pod.")]),e._v(" "),a("h4",{attrs:{id:"_1-readonlymany-rox"}},[e._v("1 - ReadOnlyMany (ROX)")]),e._v(" "),a("p",[e._v("Analogous to a CD-ROM. PVs with this access mode can be mounted read-only by any number of pods, but none can write to it. It can be useful for providing access to certification keys or common software or document repositories, etc.")]),e._v(" "),a("h4",{attrs:{id:"_2-readwriteonce-rwo"}},[e._v("2 - ReadWriteOnce (RWO)")]),e._v(" "),a("p",[e._v("Only one pod can mount the PV at a time, but that pod can read from and write to it.")]),e._v(" "),a("h4",{attrs:{id:"_3-readwritemany-rwx"}},[e._v("3 - ReadWriteMany (RWX)")]),e._v(" "),a("p",[e._v("Many pods can mount the PV and all can read and write to it. This access mode is not supported by many storage providers because of the requirement to keep all writers in sync to prevent race conditions. Any application that utilizes RWX access mode PVs is responsible for managing coordinated writes to prevent data corruption or loss.")]),e._v(" "),a("h3",{attrs:{id:"storage-classes"}},[e._v("Storage Classes")]),e._v(" "),a("p",[e._v("All kubernetes storage is made available via storage providers and there are quite a few storage providers available: hostPath, NFS, Ceph, Gluster, vSphere, just to name a very few. Different storage providers will support different attributes for the PVs it controls. Before choosing a storage provider the attributes that are supported should be considered.")]),e._v(" "),a("p",[e._v("The way a storage provider is utilized is through a storage class. A storage class defines all the parameters needed by the storage provider to create a PV. The specific attributes needed for the storage class depends on the storage provider.")]),e._v(" "),a("p",[e._v('It is common for a storage class name to include information about the storage provider and storage other attributes of the storage provider. For instance, a platform could have a storage class named "ceph-fast" indicating that if a PVC requests a PV created by this storage class it will be provided by the ceph storage provider backed by high IOPS storage. An operator may want to be even more descriptive and name the storage class "ceph-tier0" or "ceph-flash".')]),e._v(" "),a("p",[e._v("Operators are advised to be caution using too much detail and creating too many different types of storage classes due to the risk of the developer not knowing what they all mean and chosing the wrong type using expensive storage when they only needed the the less expensive type. T-Shirt sizes (fast, medium, slow) seems to be a good way to label storage classes.")]),e._v(" "),a("h2",{attrs:{id:"resilience-performance-and-scalability"}},[e._v("Resilience, Performance, and Scalability")]),e._v(" "),a("h3",{attrs:{id:"replication-vs-distribution"}},[e._v("Replication vs Distribution")]),e._v(" "),a("p",[e._v("Data resilience in a legacy environment is normally dependant upon replication. This means using data syncing technologies to replicate data between databases or storage devices.")]),e._v(" "),a("p",[e._v("This kind of resiliency plan, however, can be extremely expensive requiring duplicates of all the physical infrastructure used to keep these replicas.")]),e._v(" "),a("p",[e._v("As a result, many companies are willing to settle for backup technologies to keep offline copies of critical data. These backup storage technologies are typically much less expensive than the online replication technologies, but an outage could result in data loss between the time of the outage an the last time a backup was made.")]),e._v(" "),a("p",[e._v("Cloud Native technologies, however, handle resilience in a different way. Object storage technologies such is IBM's CleverSafe break the data up into chunks and store slices across multiple physical devices or even datacenters. With many nodes running in many environments in different geographys, data is secure and resilient so long as a quorum of nodes is up and available.")]),e._v(" "),a("p",[e._v("So, if the CleverSafe infrastructure is made up of 12 nodes, as many as 5 could faile with no data loss. If nodes are running in separate geographies or at least separate physical locations, the likelihood of losing more than half of the total nodes is extremely low.")]),e._v(" "),a("p",[e._v("It is highly recommended that applications utilize modern cloud native storage technologies to maximize resilience at minimal cost.")]),e._v(" "),a("p",[e._v("It should be noted that, whereas this type of technology provides for extreme availability and resilience, it does not protect against data corruption. If garbage is written to the database the database contains garbage and absent some additional procedures and planning, there is no way to reverse it.")]),e._v(" "),a("p",[e._v("This means that there still is a good use case for making regular backups of data. The important thing here, though, is that in a kubernetes environment, application data can be backed up at the workload storage location vs backing up the entire cluster and everything on it, significantly reducing the amount of space needed for a proper backup.")]),e._v(" "),a("p",[e._v("CAUTION: When providing internal storage technologies within a kubernetes cluster (e.g. Ceph or GlusterFS), the more bricks/OSDs you provide the more resilient your infrastructure is likely to be. Make sure to Use anti-affinity rules to make sure each of the nodes hosting this storage is running on separte physical nodes and each of the bricks/OSDs are backed by separate physical infrastructure.")]),e._v(" "),a("p",[e._v("If all nodes or a majority of nodes are running on a single physical host and that host fails, your storage techonogy will also fail due to a lack of enough backing storage to complete a transaction. This could lead to data loss or corruption.")]),e._v(" "),a("h3",{attrs:{id:"iops-considerations"}},[e._v("IOPS Considerations")]),e._v(" "),a("p",[e._v("As noted above, kubernetes master nodes running etcd require significantly higher IOPS than most other nodes. High IOPS storage is typically also much more expensive than lower IOPS storage. Since only the etcd database needs to be stored on high IOPS storage, that expensive storage utilization can be minimized by mounting only the path on the disk where the etcd database is stored from high IOPS storage and leaving the rest of the master nodes backed by lower and less expensive IOPS storage.")]),e._v(" "),a("p",[e._v("Some time sensitive workloads will also need high IOPS storage. It is recommended to provide multiple storage classes at various tiers so the developer can choose the storage that best supports the requirements of the workload.")]),e._v(" "),a("h3",{attrs:{id:"kubernetes-workload-scalability-s-affects-on-storage"}},[e._v("Kubernetes Workload Scalability's affects on Storage")]),e._v(" "),a("p",[e._v("When creating an application architecture, some developers may consider using a ReadWriteMany persistent Volume (see kubenetes Storage Concepts below for more information on persistent volumes) when they need multiple micro services to have access to the same persistent storage data.")]),e._v(" "),a("p",[e._v("Caution should be used, however, because if using appliation auto-scaling in kubernetes, when an application scales out each container in each pod with a ReadWriteMany persistent volume will have that persistent volume mounted. This could lead to storage network congestion negatively impacting not only the entire kubernetes cluster, but also everything else running on the SAN infrastructure (see Storage Network Congestion in a kubernetes Environment above).")]),e._v(" "),a("p",[e._v("A better architecture utilizes a micro service with an API to serve up data from a single ReadWriteOnly persistent volume which is then consumed by all workloads that need access to that data.")]),e._v(" "),a("h2",{attrs:{id:"storage-migration"}},[e._v("Storage Migration")]),e._v(" "),a("p",[e._v("The migration has to take into consideration of both the Kubernetes Storage Provider and Storage consumer (database or application).")]),e._v(" "),a("h3",{attrs:{id:"storage-provider"}},[e._v("Storage Provider")]),e._v(" "),a("p",[e._v("In general, Kubernetes supports quite a few storage providers including hostPath, NFS, Ceph, Gluster, vSphere, minio, Cloud-based storage (S3 etc.). And these providers can be deployed either as a part of a Kubernetes cluster (internal storage) or storage provided by an external service (external storage). For the migration, we’ll focus on the internal storage or in-cluster storage provider.")]),e._v(" "),a("p",[e._v("If you are using external storage provider, you just need to migrate the storage consumer and leave the external storage provider as-is.")]),e._v(" "),a("p",[e._v("If you are using internal storage provider, you need to setup the Openshift Storage nodes, either GlusterFS or Ceph, using the same/similar spec as in other cluster in terms of disk size, storage type, number of nodes. Then, proceed to storage consumer migration.")]),e._v(" "),a("h3",{attrs:{id:"storage-consumer"}},[e._v("Storage Consumer")]),e._v(" "),a("p",[e._v("Each client might have different storage consumption pattern, we’ll try to categorize them into the following:")]),e._v(" "),a("ul",[a("li",[e._v("Container applications requires persistent Storage")]),e._v(" "),a("li",[e._v("Kubernetes Statefulset application")]),e._v(" "),a("li",[e._v("Databases running on Kubernetes such as MongoDB, MySQL, Cloudant etc.")])]),e._v(" "),a("p",[e._v("We’ll assume that all these storage needs are implemented as Kubernetes recommended Persistent Volume (PV) and Persistent Volume Claims (PVC).")]),e._v(" "),a("p",[e._v("When it comes to migration, it really becomes a storage backup and restore discussion. Depends on the storage consumer type (database vs. custom application), it can be done with:")]),e._v(" "),a("ul",[a("li",[e._v("Kubernetes PV backup and restore")]),e._v(" "),a("li",[e._v("Using Application/Database native backup-restore tools")])])])}),[],!1,null,null,null);t.default=s.exports}}]);