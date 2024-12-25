import axios from "axios"


async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");


  await new Promise((resolve) => setTimeout(resolve, 10000));

  return response.data;
}
export default async function Home(){
  const userData:any = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}