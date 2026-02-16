import { PrismaClient } from "../generated/prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function toBase64(filePath: string) {
  const file = fs.readFileSync(filePath);
  return `data:image/png;base64,${file.toString("base64")}`;
}

async function main() {
  const user = await prisma.user.findFirst();
  const category = await prisma.category.findFirst();

  if (!user) throw new Error("Нет пользователя в БД");
  if (!category) throw new Error("Нет категории в БД");

 
  await prisma.product.deleteMany();

  const products = [
    "Тепловизор Pulsar Telos LRF XQ35",
    "DJI Mini 4K",
    "DJI Mini 4 Pro",
    "DJI Flip",
    "DJI Mini 4K",
    "Тепловизор Pulsar Axion 2 LRF XQ35 Pro",
    "DJI Mini 4 Pro",
    "Тепловизор Guide IR510 Nano N2 WiFi",
    "DJI Mini 4K",
    "Тепловизор ARMASIGHT Q14",
    "DJI Mini 4 Pro",
    "Тепловизор ATN OTS-XLT 160 2.5-10X",
    "Тепловизор ThermTec Cyclops 350Pro",
    "DJI Mini 4K",
    "Тепловизор ThermTec Cyclops 650D",
    "Тепловизор Pard Leopard"
  ];

  for (let i = 0; i < products.length; i++) {
    const imagePath = path.resolve(__dirname, "images", `${i + 1}.png`);

    if (!fs.existsSync(imagePath)) {
      throw new Error(`Файл не найден: ${imagePath}`);
    }

    const imageBase64 = toBase64(imagePath);

    await prisma.product.create({
      data: {
        name: products[i],
        description: `Официальный товар ${products[i]}`,
        price: 29900,
        discount: i === 8 ? 10 : 0,
        quantityLimit: 5,
        img: imageBase64,
        userId: user.id,
        popular: 0,
        category: {
          connect: { id: category.id }
        }
      }
    });
  }

  console.log("продукты успешно добавлены");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
