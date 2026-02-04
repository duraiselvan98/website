// Central Executive Committee Members 2023-2026
export interface CommitteeMember {
  name: string;
  srNo: string;
  zone: string;
  state: string;
  contact: string;
  photo: string;
}

export interface CommitteeCategory {
  title: string;
  color: string;
  members: CommitteeMember[];
}

// Generate a placeholder photo URL for each member
const getPlaceholderPhoto = (name: string, index: number): string => {
  const styles = ['adventurer', 'avataaars', 'big-ears', 'bottts', 'croodles', 'fun-emoji', 'lorelei', 'micah', 'miniavs', 'personas'];
  const style = styles[index % styles.length];
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(name)}`;
};

type MemberData = Omit<CommitteeMember, 'photo'>;

const addPhotosToMembers = (members: MemberData[], startIndex: number): CommitteeMember[] => {
  return members.map((member, idx) => ({
    ...member,
    photo: getPlaceholderPhoto(member.name, startIndex + idx)
  }));
};

export const committeeCategories: CommitteeCategory[] = [
  {
    title: "President",
    color: "bg-rose-600",
    members: addPhotosToMembers([
      { name: "Avinash Kumar", srNo: "61444", zone: "IR Cell, Patna", state: "Bihar", contact: "8210385795" },
    ], 0)
  },
  {
    title: "Working President",
    color: "bg-red-700",
    members: addPhotosToMembers([
      { name: "Kuldeep Singh", srNo: "76735", zone: "Kanpur", state: "Uttar Pradesh", contact: "9956033059" },
    ], 1)
  },
  {
    title: "Vice President(s)",
    color: "bg-blue-600",
    members: addPhotosToMembers([
      { name: "C Prabhakaran", srNo: "33303", zone: "Poonamallee", state: "Tamil Nadu", contact: "9566665317" },
      { name: "B B Rabha", srNo: "39296", zone: "Guwahati", state: "North East Region", contact: "9748795747" },
      { name: "Manoj Kumar Tigga", srNo: "55777", zone: "Ranchi", state: "Jharkhand", contact: "9835164853" },
      { name: "Raakesh Kumar Azad", srNo: "79325", zone: "Chandigarh", state: "Punjab", contact: "" },
      { name: "K Ramesh Babu", srNo: "26376", zone: "Karimnagar", state: "Telangana", contact: "9948294755" },
      { name: "Vetri Singam", srNo: "55090", zone: "Madurai", state: "Tamil Nadu", contact: "9443477343" },
      { name: "Pronoto Saha", srNo: "77273", zone: "Kolkata Central", state: "West Bengal", contact: "7908052809" },
    ], 2)
  },
  {
    title: "General Secretary",
    color: "bg-purple-600",
    members: addPhotosToMembers([
      { name: "Babu K", srNo: "54750", zone: "Chennai South", state: "Tamil Nadu", contact: "6379596416" },
    ], 9)
  },
  {
    title: "Deputy General Secretary",
    color: "bg-violet-600",
    members: addPhotosToMembers([
      { name: "Kanagaselvan", srNo: "54836", zone: "Chennai South", state: "Tamil Nadu", contact: "7639884356" },
      { name: "Santosh Kumar Patil", srNo: "61658", zone: "Jabalpur", state: "Madhya Pradesh", contact: "9589511402" },
      { name: "Pradeep Kumar", srNo: "83082", zone: "Jhansi", state: "Uttar Pradesh", contact: "9454088119" },
      { name: "Mithilesh Bharti", srNo: "39716", zone: "Gaya", state: "Bihar", contact: "9430278764" },
      { name: "CH Chinnamaddaiah", srNo: "55698", zone: "Hyderabad", state: "Telangana", contact: "9743828382" },
      { name: "Uma Devi", srNo: "25183", zone: "Service Branch", state: "Tamil Nadu", contact: "" },
      { name: "Anand", srNo: "67727", zone: "Salem", state: "Tamil Nadu", contact: "9790232643" },
    ], 10)
  },
  {
    title: "Assistant General Secretary",
    color: "bg-amber-600",
    members: addPhotosToMembers([
      { name: "Mohanraj E", srNo: "67198", zone: "Puducherry", state: "Tamil Nadu", contact: "7397000397" },
      { name: "Anjaleena Tirkey", srNo: "33378", zone: "Bhopal", state: "Madhya Pradesh", contact: "8939404455" },
      { name: "Selvakumar K P", srNo: "", zone: "", state: "Tamil Nadu", contact: "" },
      { name: "Katikela Shyam Benegal", srNo: "59039", zone: "Amaravathi", state: "Andhra Pradesh", contact: "9949879743" },
      { name: "Devendra Kumar", srNo: "71910", zone: "Sitapur", state: "Uttar Pradesh", contact: "9554471071" },
      { name: "Hemant Kumar", srNo: "76528", zone: "Delhi Central", state: "Delhi", contact: "9718617690" },
      { name: "Chow Luky Chowlu", srNo: "33385", zone: "Dibrugarh", state: "North East Region", contact: "8822708019" },
      { name: "Sasikumar", srNo: "64054", zone: "Ernakulam", state: "Kerala", contact: "9677677603" },
      { name: "Rajendra Meena", srNo: "36871", zone: "Jaipur", state: "Rajasthan", contact: "9596933001" },
      { name: "Manjeet Singh", srNo: "81736", zone: "Gurgaon", state: "Haryana", contact: "" },
    ], 17)
  },
  {
    title: "Organizing Secretary",
    color: "bg-orange-600",
    members: addPhotosToMembers([
      { name: "Satya Prakash Meena", srNo: "75193", zone: "Jaipur", state: "Rajasthan", contact: "8962951492" },
    ], 27)
  },
  {
    title: "Treasurer",
    color: "bg-teal-600",
    members: addPhotosToMembers([
      { name: "Nandakumar D", srNo: "73096", zone: "Chennai North", state: "Tamil Nadu", contact: "9884340379" },
    ], 28)
  },
  {
    title: "Assistant Treasurer",
    color: "bg-cyan-600",
    members: addPhotosToMembers([
      { name: "Satyamurthy", srNo: "41035", zone: "Chennai North", state: "Tamil Nadu", contact: "9444432998" },
    ], 29)
  },
  {
    title: "Executive Committee Members",
    color: "bg-indigo-600",
    members: addPhotosToMembers([
      { name: "Swarna Keerthana", srNo: "94179", zone: "Amaravathi", state: "Andhra Pradesh", contact: "7670936295" },
      { name: "P Anjaneya Prasad", srNo: "65270", zone: "Rajahmundry", state: "Andhra Pradesh", contact: "9492925758" },
      { name: "Basaweswara Rao", srNo: "56522", zone: "Visakhapatnam", state: "Andhra Pradesh", contact: "6300633465" },
      { name: "Gitanjali Bordoloi", srNo: "77732", zone: "Guwahati", state: "Assam", contact: "8876918358" },
      { name: "Priyanka Saikia", srNo: "72291", zone: "Dibrugarh", state: "Assam", contact: "9706008345" },
      { name: "Aryan Kumar", srNo: "78540", zone: "Patna", state: "Bihar", contact: "8807718612" },
      { name: "Arvind Kumar", srNo: "71221", zone: "Muzaffarpur", state: "Bihar", contact: "9939699637" },
      { name: "Rajesh Kumar", srNo: "31687", zone: "Bhagalpur", state: "Bihar", contact: "9445188889" },
      { name: "Deepti Kispotta", srNo: "72891", zone: "Raipur", state: "Chhattisgarh", contact: "9685886807" },
      { name: "Pradeep Verma", srNo: "85321", zone: "Rajkot", state: "Gujarat", contact: "8432190065" },
      { name: "Ketan Solanki", srNo: "32462", zone: "Ahmedabad", state: "Gujarat", contact: "" },
      { name: "Anuj Kumar Bari", srNo: "58889", zone: "Deoghar", state: "Jharkhand", contact: "8409493233" },
      { name: "Amaranth Gopi", srNo: "57398", zone: "Mysore", state: "Karnataka", contact: "9500042421" },
      { name: "Pradeesh Kumar", srNo: "64743", zone: "Calicut", state: "Kerala", contact: "9486703836" },
      { name: "Navneet Parte", srNo: "82847", zone: "Jabalpur", state: "Madhya Pradesh", contact: "8817804058" },
      { name: "Girish Jadhav", srNo: "64085", zone: "Pune", state: "Maharashtra", contact: "9158869960" },
      { name: "Ujwala Bhitre", srNo: "55804", zone: "Mumbai West", state: "Maharashtra", contact: "9819857553" },
      { name: "Chandan Prakash", srNo: "32977", zone: "Nagpur", state: "Maharashtra", contact: "9133043332" },
      { name: "Sandeep Kumar Pradhan", srNo: "33379", zone: "Orissa", state: "Orissa", contact: "" },
      { name: "Ajay Kumar", srNo: "92807", zone: "Amritsar", state: "Punjab", contact: "" },
      { name: "Kamal Singh", srNo: "31907", zone: "Ludhiana", state: "Punjab", contact: "9873787119" },
      { name: "Madan Lal Meena", srNo: "32064", zone: "Jaipur", state: "Rajasthan", contact: "9414338962" },
      { name: "Khushal Verma", srNo: "68428", zone: "Jaipur", state: "Rajasthan", contact: "9983559383" },
      { name: "Manonmani Priya", srNo: "91839", zone: "Poonamallee", state: "Tamil Nadu", contact: "6381205422" },
      { name: "Rajkumar S", srNo: "772492", zone: "DAMC Coimbatore", state: "Tamil Nadu", contact: "7418361493" },
      { name: "Maruthamuthu", srNo: "82440", zone: "Chennai North", state: "Tamil Nadu", contact: "9092658774" },
      { name: "Devaraj", srNo: "82441", zone: "Chennai North", state: "Tamil Nadu", contact: "9003108139" },
      { name: "N Siva Kumar", srNo: "60690", zone: "Chennai North", state: "Tamil Nadu", contact: "" },
      { name: "A Venu", srNo: "42230", zone: "Chennai South", state: "Tamil Nadu", contact: "" },
      { name: "Karthikeyan T", srNo: "66347", zone: "Coimbatore", state: "Tamil Nadu", contact: "9655476731" },
      { name: "Lokesh Srinivas R S", srNo: "68629", zone: "Vellore", state: "Tamil Nadu", contact: "9600884896" },
      { name: "Dinesh E", srNo: "36492", zone: "Chennai South", state: "Tamil Nadu", contact: "8973248171" },
      { name: "Umanath M", srNo: "71514", zone: "Corporate Office", state: "Tamil Nadu", contact: "9962081383" },
      { name: "Balachander", srNo: "42615", zone: "Puducherry", state: "Tamil Nadu", contact: "9943316410" },
      { name: "GV Gowtham", srNo: "", zone: "", state: "Tamil Nadu", contact: "" },
      { name: "Kranthi Kumar", srNo: "69280", zone: "Karimnagar", state: "Telangana", contact: "9666559011" },
      { name: "Mahendra Kumar Pasi", srNo: "32193", zone: "Kanpur", state: "Uttar Pradesh", contact: "9389038880" },
      { name: "Ashok Kumar", srNo: "62700", zone: "Mirzapur", state: "Uttar Pradesh", contact: "9621103682" },
      { name: "Chhedi Lal", srNo: "59865", zone: "Hamirpur", state: "Uttar Pradesh", contact: "9450262170" },
      { name: "Mukesh Kumar", srNo: "61260", zone: "Hamirpur", state: "Uttar Pradesh", contact: "9839161942" },
      { name: "Sulekha Singh", srNo: "63467", zone: "DAMC Lucknow", state: "Uttar Pradesh", contact: "8429168310" },
      { name: "Pradeep Kumar", srNo: "65753", zone: "Gorakhpur", state: "Uttar Pradesh", contact: "9411022834" },
      { name: "Om Prakash Kureel", srNo: "60011", zone: "DAMC Allahabad", state: "Uttar Pradesh", contact: "9889204861" },
      { name: "Subha Chandra Mitra", srNo: "60709", zone: "Bahraich", state: "Uttar Pradesh", contact: "9415577684" },
      { name: "Ashish Kumar", srNo: "82741", zone: "Varanasi", state: "Uttar Pradesh", contact: "9519775618" },
      { name: "Indrabhan Singh", srNo: "85143", zone: "Agra", state: "Uttar Pradesh", contact: "7007996337" },
      { name: "Shivakant", srNo: "80305", zone: "Kanpur", state: "Uttar Pradesh", contact: "9455015011" },
      { name: "Bishwajit Kisku", srNo: "78040", zone: "Kolkata North", state: "West Bengal", contact: "9830282409" },
    ], 30)
  },
];

export const getTotalMembers = () => {
  return committeeCategories.reduce((acc, cat) => acc + cat.members.length, 0);
};