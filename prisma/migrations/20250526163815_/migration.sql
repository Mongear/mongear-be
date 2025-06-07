-- AddForeignKey
ALTER TABLE "keycaps" ADD CONSTRAINT "keycaps_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "keycap_materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "accessory_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
