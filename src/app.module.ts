import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { LayoutModule } from './layout/layout.module';

@Module({
  imports: [PrismaModule, AuthModule, KeyboardModule, UserModule, LayoutModule],
})
export class AppModule { }
