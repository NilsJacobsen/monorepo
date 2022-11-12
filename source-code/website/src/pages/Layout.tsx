import { createSignal, For, JSXElement, Show } from "solid-js";

// command-f this repo to find where the layout is called
export function Layout(props: { children: JSXElement }) {
	return (
		<>
			<Header></Header>
			{props.children}
			<Footer></Footer>
		</>
	);
}

function Header() {
	const links = [
		{ name: "Docs", href: "/documentation" },
		{ name: "Editor", href: "/editor" },
	];

	const [show, setShow] = createSignal(false);

	return (
		<header class="sticky top-0 z-40 bg-background border-b border-outline 	">
			<nav class="mx-auto max-w-screen-2xl  sm:px-6 2xl:px-0 ">
				<div class="relative z-50 flex justify-between py-8  q">
					<div class="relative z-10 flex items-center gap-16">
						<a href="/" class="flex">
							<img
								class="h-8 w-auto "
								src="/favicon/favicon.ico"
								alt=" Company Logo"
							/>
							<span class=" self-center pl-2 text-xl font-bold">inlang</span>
						</a>
						<div class="hidden lg:flex lg:gap-10">
							<For each={links}>
								{(link) => (
									<a class="link-primary" href={link.href}>
										{link.name}
									</a>
								)}
							</For>
						</div>
					</div>
					{/* Responsive icon start */}
					<div class="self-center flex space-x-2">
						<a href="https://twitter.com/inlangHQ" class="flex space-x-1">
							<span class="">Twitter</span>
							<svg
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
							</svg>
						</a>
						<a
							href="https://github.com/inlang/inlang"
							class="link-primary  flex space-x-1"
						>
							<span class="">GitHub</span>
							<svg
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>
					<div class="-my-2 -mr-2 md:hidden">
						<button
							onClick={(e) => setShow(true)}
							type="button"
							class="inline-flex items-center justify-center rounded-md bg-background p-2 text-primary "
							aria-expanded="false"
						>
							<span class="sr-only">Open menu</span>
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
					{/*Responsive icon end  */}
				</div>
				<Show when={show()}>
					<div
						class={
							"absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
						}
					>
						<div class="divide-y-2 divide-gray-50 rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
							<div class="px-5 pt-5 pb-6 sm:pb-8">
								<div class="flex items-center justify-between">
									<div class="">
										<a href="/" class="flex">
											<img
												class="h-8 w-auto sm:h-10"
												src="/favicon/favicon.ico"
												alt=" Company Logo"
											/>
											<span class=" self-center pl-2 text-2xl	font-bold">
												inlang
											</span>
										</a>
									</div>
									<div class="-mr-2">
										<button
											onClick={(e) => setShow(false)}
											type="button"
											class="inline-flex items-center justify-center rounded-md bg-background p-2 text-primary "
										>
											<span class="sr-only">Close menu</span>
											{/* <!-- Heroicon name: outline/x-mark --> */}
											<svg
												class="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
								{/* Nav, responsive */}
							</div>
							<div class="py-6 px-5">
								{/* Change the grid-cols to have more  than one item in a col. */}
								<div class="grid grid-cols-1 gap-4 ">
									{/* TODO */}

									{/* TODO */}
									<For each={links}>
										{(link) => (
											<a class="link-primary" href={link.href}>
												{link.name}
											</a>
										)}
									</For>
									<div>
										<a
											class="flex  space-x-1.5"
											href="https://github.com/inlang/inlang"
										>
											<p>Github</p>
											<p class="flex items-center self-center md:ml-12">
												{" "}
												{/* <Icon icon="codicon:github-inverted" /> */}
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Show>
			</nav>
		</header>
	);
}

function Footer() {
	return (
		<footer
			aria-labelledby="footer-heading"
			class="fixed  inset-x-0 bottom-0 z-40 bg-background border-t border-outline-variant sm:px-6 2xl:px-0   	"
		>
			<h2 id="footer-heading" class="sr-only">
				Footer
			</h2>
			{/* <div class="w-screen border-t border-gray-200	"></div> */}
			{/* <div class=" px-4 sm:px-6 lg:px-8 mx-auto flex  items-center justify-between  py-5  sm:py-4 md:justify-start md:space-x-10 "> */}
			<div class="mx-auto max-w-screen-2xl py-2   ">
				<div class="flex   items-center content-center sm:px-6 lg:px-0 mx-auto	  md:justify-between ">
					<div class="flex  items-center space-x-6 md:order-2">
						<a href="#" class="link link-primary font-light">
							<span class="">imprint</span>
						</a>

						<a href="mailto:hello@inlang.com" class="link link-primary ">
							hello@inlang.com
						</a>

						<a
							href="https://twitter.com/inlangHQ"
							class="text-gray-400 hover:text-gray-500"
						>
							<span class="sr-only">Twitter</span>
							<svg
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
							</svg>
						</a>
						<a
							href="https://github.com/inlang/inlang"
							class="link link-primary"
						>
							<span class="sr-only">GitHub</span>
							<svg
								class="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>

					<p class="text-base self-center	 text-gray-400 ">
						&copy; 2022 Inlang, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}