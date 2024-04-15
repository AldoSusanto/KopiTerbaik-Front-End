import { useState } from "react";
import "./App.css";
import Column from "./Components/Column/Column";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import toast, { Toaster } from "react-hot-toast";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Kopi Kenangan",
      imgSrc:
        "https://awards.brandingforum.org/wp-content/uploads/2020/12/KOPI-KENANGAN_LOGO-2020.png",
    },
    {
      id: 2,
      title: "Janji Jiwa",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4BtyBTVb5j9dMWU1DxtE4wOXFB0tHhklf9S3nBSsMw&s",
    },
    {
      id: 3,
      title: "Kopi Tuku",
      imgSrc:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/TUU-60024-4161e538-deff-40db-a471-797ae292c91f.png",
    },
    {
      id: 4,
      title: "Family Mart",
      imgSrc:
        "https://e7.pngegg.com/pngimages/594/878/png-clipart-familymart-%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%88%E3%83%88%E3%83%AA%E3%82%A2%E3%82%B9%E4%B9%85%E5%B1%B1%E5%BA%97-family-mart-convenience-shop-khlong-nueng-%E4%BE%BF%E5%88%A9%E5%BA%97-blue-text-thumbnail.png",
    },
    {
      id: 5,
      title: "Point Coffee",
      imgSrc:
        "https://cms.pointcoffee.id/uploads/point_coffee_green_7a33f803df.png",
    },
    {
      id: 6,
      title: "Tomoro Coffee",
      imgSrc:
        "https://seeklogo.com/images/T/tomoro-coffee-logo-50A24675DC-seeklogo.com.png",
    },
    {
      id: 7,
      title: "Fore Coffee",
      imgSrc:
        "https://obs-sg.line-apps.com/0hkQ_bIS-TNH5iGycYGYtLKTNDPwwONSt9HDxlShwbIRs5bjF7AiAlZBhoaiYTKi96FX07SjJzNhs6KzhTARlzZCFsaSUqdjVAAgU9ZERaNTI9QDJJOw0",
    },
    {
      id: 8,
      title: "Kopi Soe ",
      imgSrc:
        "https://media.licdn.com/dms/image/C560BAQGzdZm6U6wpNw/company-logo_200_200/0/1641271445102/kopi_soe_logo?e=2147483647&v=beta&t=hqcNFH6RoE_GQl8oKdm_3EeHwStQ8PH5roXoLLqT2GY",
    },
    {
      id: 9,
      title: "Arah Coffee",
      imgSrc:
        "https://brandpedia.id/wp-content/uploads/2023/06/logo-arah-kopi.jpg",
    },
    {
      id: 10,
      title: "Flash Coffee",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOfwi2S9KIWOPiasXIE2SAmgA9qtDw3NgMYpFs53YPw&s",
    },
    {
      id: 11,
      title: "Calf",
      imgSrc:
        "https://media.licdn.com/dms/image/C4D0BAQFgV3e9WlZ6AQ/company-logo_200_200/0/1655366606998?e=2147483647&v=beta&t=fN6GImzEhjJdkG09uo268rIUs74ZeaJUeLmoJZzB3ww",
    },
    {
      id: 12,
      title: "% Arabica",
      imgSrc:
        "https://www.centralparkjakarta.com/wp-content/uploads/2021/02/Arabica-logo.jpg",
    },
    {
      id: 13,
      title: "Starbucks",
      imgSrc:
        "https://i.pinimg.com/originals/ba/a8/67/baa867c146c04d0b329fd6b0bf70281e.png",
    },
  ]);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPosition = getTaskPos(active.id);
      const newPosition = getTaskPos(over.id);

      return arrayMove(tasks, originalPosition, newPosition);
    });
  };

  const handleSubmit = (event) => {
    // console.log(tasks);
    toast.success("Ranking sudah terkirim !\n Terima Kasih atas survey anda");
    setTasks([
      {
        id: 1,
        title: "Kopi Kenangan",
        imgSrc:
          "https://awards.brandingforum.org/wp-content/uploads/2020/12/KOPI-KENANGAN_LOGO-2020.png",
      },
      {
        id: 2,
        title: "Janji Jiwa",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4BtyBTVb5j9dMWU1DxtE4wOXFB0tHhklf9S3nBSsMw&s",
      },
      {
        id: 3,
        title: "Kopi Tuku",
        imgSrc:
          "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/TUU-60024-4161e538-deff-40db-a471-797ae292c91f.png",
      },
      {
        id: 4,
        title: "Family Mart",
        imgSrc:
          "https://e7.pngegg.com/pngimages/594/878/png-clipart-familymart-%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%88%E3%83%88%E3%83%AA%E3%82%A2%E3%82%B9%E4%B9%85%E5%B1%B1%E5%BA%97-family-mart-convenience-shop-khlong-nueng-%E4%BE%BF%E5%88%A9%E5%BA%97-blue-text-thumbnail.png",
      },
      {
        id: 5,
        title: "Point Coffee",
        imgSrc:
          "https://cms.pointcoffee.id/uploads/point_coffee_green_7a33f803df.png",
      },
      {
        id: 6,
        title: "Tomoro Coffee",
        imgSrc:
          "https://seeklogo.com/images/T/tomoro-coffee-logo-50A24675DC-seeklogo.com.png",
      },
      {
        id: 7,
        title: "Fore Coffee",
        imgSrc:
          "https://obs-sg.line-apps.com/0hkQ_bIS-TNH5iGycYGYtLKTNDPwwONSt9HDxlShwbIRs5bjF7AiAlZBhoaiYTKi96FX07SjJzNhs6KzhTARlzZCFsaSUqdjVAAgU9ZERaNTI9QDJJOw0",
      },
      {
        id: 8,
        title: "Kopi Soe ",
        imgSrc:
          "https://media.licdn.com/dms/image/C560BAQGzdZm6U6wpNw/company-logo_200_200/0/1641271445102/kopi_soe_logo?e=2147483647&v=beta&t=hqcNFH6RoE_GQl8oKdm_3EeHwStQ8PH5roXoLLqT2GY",
      },
      {
        id: 9,
        title: "Arah Coffee",
        imgSrc:
          "https://brandpedia.id/wp-content/uploads/2023/06/logo-arah-kopi.jpg",
      },
      {
        id: 10,
        title: "Flash Coffee",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOfwi2S9KIWOPiasXIE2SAmgA9qtDw3NgMYpFs53YPw&s",
      },
      {
        id: 11,
        title: "Calf",
        imgSrc:
          "https://media.licdn.com/dms/image/C4D0BAQFgV3e9WlZ6AQ/company-logo_200_200/0/1655366606998?e=2147483647&v=beta&t=fN6GImzEhjJdkG09uo268rIUs74ZeaJUeLmoJZzB3ww",
      },
      {
        id: 12,
        title: "% Arabica",
        imgSrc:
          "https://www.centralparkjakarta.com/wp-content/uploads/2021/02/Arabica-logo.jpg",
      },
      {
        id: 13,
        title: "Starbucks",
        imgSrc:
          "https://i.pinimg.com/originals/ba/a8/67/baa867c146c04d0b329fd6b0bf70281e.png",
      },
    ]);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #33b249",
            padding: "16px",
            color: "#33b249",
          },
        }}
      />
      <h1 className="title">Rank Kopi Favoritmu !</h1>
      <p className="subTitle">
        Menurutmu, franchise kopi manakah yang terbaik? Urutkan dibawah !{" "}
      </p>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks}></Column>
      </DndContext>
      <button onClick={handleSubmit} className="submitButton">
        Submit Ranking
      </button>
    </>
  );
}

export default App;
