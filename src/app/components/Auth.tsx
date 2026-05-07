import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import {
  Mail,
  Lock,
  User,
  GraduationCap,
  Building2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { toast } from "sonner";

type LoginFormData = {
  email: string;
  password: string;
};

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  organization: string;
  role: string;
};

export function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const loginForm = useForm<LoginFormData>();
  const registerForm = useForm<RegisterFormData>();

  const onLogin = (data: LoginFormData) => {
    console.log("Login data:", data);
    toast.success("Вход выполнен успешно!");
  };

  const onRegister = (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Пароли не совпадают");
      return;
    }
    console.log("Register data:", data);
    toast.success("Регистрация выполнена успешно!");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1775503059048-214026cce5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NjI0NTYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              УниПартнёр
            </h1>
          </motion.div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
              >
                Вход
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
              >
                Регистрация
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Добро пожаловать
                    </CardTitle>
                    <CardDescription>
                      Войдите в свой аккаунт для продолжения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={loginForm.handleSubmit(onLogin)}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label
                          htmlFor="login-email"
                          className="text-gray-700"
                        >
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="example@university.edu"
                            className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...loginForm.register("email", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="login-password"
                          className="text-gray-700"
                        >
                          Пароль
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="login-password"
                            type={
                              showPassword ? "text" : "password"
                            }
                            placeholder="••••••••"
                            className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...loginForm.register("password", {
                              required: true,
                            })}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword(!showPassword)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300"
                          />
                          <span className="text-gray-600">
                            Запомнить меня
                          </span>
                        </label>
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Забыли пароль?
                        </a>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                      >
                        Войти
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Создать аккаунт
                    </CardTitle>
                    <CardDescription>
                      Заполните форму для регистрации на
                      платформе
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={registerForm.handleSubmit(
                        onRegister,
                      )}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label
                          htmlFor="register-name"
                          className="text-gray-700"
                        >
                          Полное имя
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="register-name"
                            type="text"
                            placeholder="Иван Иванов"
                            className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...registerForm.register("name", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="register-email"
                          className="text-gray-700"
                        >
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="example@university.edu"
                            className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...registerForm.register("email", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="register-organization"
                          className="text-gray-700"
                        >
                          Организация
                        </Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="register-organization"
                            type="text"
                            placeholder="Название вуза или предприятия"
                            className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...registerForm.register(
                              "organization",
                              { required: true },
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="register-role"
                          className="text-gray-700"
                        >
                          Роль
                        </Label>
                        <select
                          id="register-role"
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          {...registerForm.register("role", {
                            required: true,
                          })}
                        >
                          <option value="">
                            Выберите роль
                          </option>
                          <option value="university">
                            Представитель вуза
                          </option>
                          <option value="partner">
                            Представитель предприятия
                          </option>
                          <option value="student">
                            Студент
                          </option>
                          <option value="researcher">
                            Исследователь
                          </option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="register-password"
                          className="text-gray-700"
                        >
                          Пароль
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="register-password"
                            type={
                              showPassword ? "text" : "password"
                            }
                            placeholder="••••••••"
                            className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...registerForm.register(
                              "password",
                              { required: true },
                            )}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword(!showPassword)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="register-confirm-password"
                          className="text-gray-700"
                        >
                          Подтвердите пароль
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="register-confirm-password"
                            type={
                              showConfirmPassword
                                ? "text"
                                : "password"
                            }
                            placeholder="••••••••"
                            className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:border-blue-500"
                            {...registerForm.register(
                              "confirmPassword",
                              { required: true },
                            )}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(
                                !showConfirmPassword,
                              )
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1 rounded border-gray-300"
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          Я согласен с{" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            условиями использования
                          </a>{" "}
                          и{" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            политикой конфиденциальности
                          </a>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                      >
                        Зарегистрироваться
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <a
              href="/"
              className="text-white/90 hover:text-white text-sm inline-flex items-center gap-2 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Вернуться на главную
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}