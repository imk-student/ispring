CREATE TABLE public.tasklist (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	description varchar NULL,
	done bool NULL,
	"user" int4 NULL,
	created_at timestamp NULL,
	done_at timestamp NULL,
	CONSTRAINT tasklist_pk PRIMARY KEY (id),
	CONSTRAINT tasklist_users_fk FOREIGN KEY ("user") REFERENCES public.users(id)
);

CREATE TABLE public.users (
	id serial4 NOT NULL,
	username varchar NOT NULL,
	email varchar NOT NULL,
	CONSTRAINT users_check CHECK (((email)::text ~~ '%_@__%.__%'::text)),
	CONSTRAINT users_pk PRIMARY KEY (id)
);
